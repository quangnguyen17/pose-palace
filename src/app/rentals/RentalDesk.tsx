'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import {
  Camera,
  RentalBooking,
  RentalSettings,
  cameraLabel,
  rentalCameras,
  rentalKey,
  rentalSettings,
} from './data'

type RentalState = {
  cameras: Camera[]
  bookings: RentalBooking[]
  settings: RentalSettings
}

const initialState = (): RentalState => ({
  cameras: rentalCameras,
  bookings: [],
  settings: rentalSettings,
})

const isoToday = () => {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

const dateValue = (value: string) => {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const diffDays = (from: string, to: string) =>
  Math.round((dateValue(to).getTime() - dateValue(from).getTime()) / 86400000)

const minutes = (time: string) => {
  const [hour, minute] = time.split(':').map(Number)
  return hour * 60 + minute
}

const timeLabel = (time: string) => {
  const [rawHour, rawMinute] = time.split(':').map(Number)
  const suffix = rawHour >= 12 ? 'PM' : 'AM'
  const hour = rawHour % 12 || 12
  return `${hour}:${String(rawMinute).padStart(2, '0')} ${suffix}`
}

const dateLabel = (value: string) =>
  dateValue(value).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })

const hoursBetween = (from: string, to: string, pickup: string, dropoff: string) =>
  diffDays(from, to) * 24 + (minutes(dropoff) - minutes(pickup)) / 60

const graceFor = (settings: RentalSettings, days: number) =>
  settings.graceHours[days - 1] ?? settings.graceHours[settings.graceHours.length - 1] ?? 0

const tierFor = (settings: RentalSettings, hours: number) => {
  if (hours <= 0) return 0
  for (let days = 1; days <= settings.maxDays; days += 1) {
    if (hours <= days * 24 + graceFor(settings, days)) return days
  }
  return 0
}

const timeOptions = (settings: RentalSettings) => {
  const result: string[] = []
  for (let value = minutes(settings.open); value <= minutes(settings.close); value += 30) {
    result.push(
      `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`,
    )
  }
  return result
}

const overlap = (aFrom: string, aTo: string, bFrom: string, bTo: string) =>
  !(aTo < bFrom || aFrom > bTo)

const currency = (value: number) => `$${value.toFixed(2).replace('.00', '')}`

const readState = (): RentalState => {
  if (typeof window === 'undefined') return initialState()
  try {
    const parsed = JSON.parse(window.localStorage.getItem(rentalKey) || '') as Partial<RentalState>
    return {
      cameras: parsed.cameras?.length ? parsed.cameras : rentalCameras,
      bookings: parsed.bookings || [],
      settings: { ...rentalSettings, ...(parsed.settings || {}) },
    }
  } catch {
    return initialState()
  }
}

const writeState = (state: RentalState) => {
  window.localStorage.setItem(rentalKey, JSON.stringify(state))
}

const latestReturn = (from: string, pickup: string, days: number, settings: RentalSettings) => {
  const totalMinutes = minutes(pickup) + (days * 24 + graceFor(settings, days)) * 60
  const date = new Date(dateValue(from))
  date.setDate(date.getDate() + Math.floor(totalMinutes / 1440))
  const clock = totalMinutes % 1440
  return `${date.toISOString().slice(0, 10)} ${String(Math.floor(clock / 60)).padStart(2, '0')}:${String(clock % 60).padStart(2, '0')}`
}

const quoteFor = (
  camera: Camera | undefined,
  from: string,
  to: string,
  pickup: string,
  dropoff: string,
  insurance: boolean,
  sessionCredit: boolean,
  settings: RentalSettings,
) => {
  if (!camera || !from || !to) return null
  const hours = hoursBetween(from, to, pickup, dropoff)
  const days = tierFor(settings, hours)
  if (!days) return null
  const rental = days * camera.rateDay
  const discount = days >= settings.discountDays ? -(rental * settings.discountPct) / 100 : 0
  const coverage = insurance ? days * settings.insurance : 0
  const credit = sessionCredit ? -settings.rateHour : 0
  const subtotal = Math.max(0, rental + discount + coverage + credit)
  return {
    days,
    hours,
    rental,
    discount,
    coverage,
    credit,
    subtotal,
    deposit: settings.deposit,
    dueAtPickup: subtotal + settings.deposit,
    dueBack: latestReturn(from, pickup, days, settings),
  }
}

const Arrow = () => <span aria-hidden="true">↗</span>

export const RentalDesk = () => {
  const [state, setState] = useState<RentalState>(initialState)
  const [ready, setReady] = useState(false)
  const [selectedId, setSelectedId] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [pickup, setPickup] = useState('10:00')
  const [dropoff, setDropoff] = useState('10:00')
  const [insurance, setInsurance] = useState(true)
  const [sessionCredit, setSessionCredit] = useState(false)
  const [submitted, setSubmitted] = useState<RentalBooking | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setState(readState())
    setReady(true)
  }, [])

  const camera = state.cameras.find((item) => item.id === selectedId)
  const quote = quoteFor(
    camera,
    from,
    to,
    pickup,
    dropoff,
    insurance,
    sessionCredit,
    state.settings,
  )
  const options = timeOptions(state.settings)
  const activeCameras = state.cameras.filter((item) => item.active)

  const isBusy = (cameraId: string, start: string, end: string) =>
    state.bookings.some(
      (booking) =>
        booking.cameraId === cameraId &&
        ['reserved', 'out'].includes(booking.status) &&
        overlap(start, end, booking.from, booking.to),
    )

  const selectCamera = (item: Camera) => {
    setSelectedId(item.id)
    setError('')
    if (from && to && isBusy(item.id, from, to)) {
      setFrom('')
      setTo('')
    }
  }

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    const form = new FormData(event.currentTarget)
    if (!camera || !from || !to) return setError('Choose a camera and both rental dates first.')
    if (from < isoToday() || to < from)
      return setError('Choose a valid future pickup and return range.')
    if (isBusy(camera.id, from, to))
      return setError('Those dates were just taken. Please choose another range.')
    if (!quote || quote.hours <= 0)
      return setError('That return time is past the allowed rental limit.')
    const nextNumber = state.bookings.length + 1
    const booking: RentalBooking = {
      ref: `PP-${String(nextNumber).padStart(4, '0')}`,
      cameraId: camera.id,
      from,
      to,
      pickup,
      dropoff,
      days: quote.days,
      hours: quote.hours,
      dueBack: quote.dueBack,
      discount: quote.discount,
      insurance,
      subtotal: quote.subtotal,
      deposit: quote.deposit,
      dueAtPickup: quote.dueAtPickup,
      name: String(form.get('name') || ''),
      phone: String(form.get('phone') || ''),
      email: String(form.get('email') || ''),
      notes: String(form.get('notes') || ''),
      status: 'reserved',
      created: new Date().toISOString(),
    }
    const nextState = { ...state, bookings: [booking, ...state.bookings] }
    setState(nextState)
    writeState(nextState)
    setSubmitted(booking)
  }

  if (!ready) return null

  return (
    <div className="RentalSite">
      <header className="RentalHeader">
        <div className="PageWrap RentalHeaderInner">
          <Link href="/#top" className="RentalBrand" aria-label="Back to Pose Palace">
            <Image src="/logo-short.png" alt="Pose Palace" width={178} height={50} priority />
          </Link>
          <nav className="RentalNav" aria-label="Rental navigation">
            <a href="#fleet">The fleet</a>
            <a href="#reserve">Book dates</a>
            <a href="#policies">Policies</a>
            <Link href="/rentals/manager">Rental desk</Link>
          </nav>
          <Link href="/#top" className="RentalBackLink">
            ← studio site
          </Link>
        </div>
      </header>

      <main>
        <section className="RentalHero">
          <div className="RentalHeroMotif" aria-hidden="true">
            pose palace · pose palace · pose palace
          </div>
          <div className="PageWrap RentalHeroGrid">
            <div>
              <p className="Eyebrow">the fleet · pose palace digicam rentals</p>
              <h1>
                seven cameras,
                <br />
                <span>no two alike.</span>
              </h1>
            </div>
            <p className="RentalHeroLead">
              Every one of these shot real photos in its era. Pick by the look you want, not the
              spec sheet — though the spec sheet is right there.
            </p>
          </div>
          <div className="RentalStrip">
            <div>
              <b>{activeCameras.length}</b>
              <span>cameras ready</span>
            </div>
            <div>
              <b>{currency(state.settings.rateDay)}+</b>
              <span>per day</span>
            </div>
            <div>
              <b>{currency(state.settings.rateHour)}+</b>
              <span>per hour, walk-ins</span>
            </div>
            <div>
              <b>9:00–7:30</b>
              <span>pickup + drop-off hours</span>
            </div>
            <div>
              <b>{state.settings.deposit}</b>
              <span>refundable deposit</span>
            </div>
          </div>
        </section>

        <section className="RentalSection" id="fleet">
          <div className="PageWrap">
            <div className="RentalSectionHeading">
              <div>
                <p className="Eyebrow">pick your look</p>
                <h2>
                  the whole shelf,
                  <br />
                  <span>right here.</span>
                </h2>
              </div>
              <p>
                Daily rentals are requested online for one to three days. Each camera is cleaned,
                test-shot, charged, and sent out with an empty SD card and carrying bag.
              </p>
            </div>
            <div className="RentalFleetGrid">
              {activeCameras.map((item) => (
                <article className="RentalCameraCard" key={item.id}>
                  <div
                    className="RentalCameraImage"
                    style={{ '--camera-color': item.color } as React.CSSProperties}
                  >
                    <Image
                      src={item.image}
                      alt={`${cameraLabel(item)} rental camera`}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    />
                    <span>0{activeCameras.indexOf(item) + 1}</span>
                  </div>
                  <div className="RentalCameraBody">
                    <h3>
                      {cameraLabel(item)} <em>{item.year}</em>
                    </h3>
                    <div className="RentalSpecs">
                      <span>{item.mp} MP</span>
                      <span>{item.zoom}</span>
                      <span>{item.extra}</span>
                    </div>
                    <p>{item.note}</p>
                    <div className="RentalCardFoot">
                      <strong>
                        {currency(item.rateDay)} <small>/ day</small>
                      </strong>
                      <button
                        type="button"
                        onClick={() => {
                          selectCamera(item)
                          document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        Check dates
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="RentalSection RentalReserveSection" id="reserve">
          <div className="PageWrap">
            <div className="RentalSectionHeading">
              <div>
                <p className="Eyebrow">reserve a camera</p>
                <h2>
                  pick dates,
                  <br />
                  <span>see the total.</span>
                </h2>
              </div>
              <p>
                Choose your camera, pickup and return times, then send the request. We confirm the
                shelf and final details before your rental is held.
              </p>
            </div>
            {submitted ? (
              <BookingConfirmation
                booking={submitted}
                cameras={state.cameras}
                onReset={() => setSubmitted(null)}
              />
            ) : (
              <form className="RentalBookingPanel" onSubmit={submitBooking}>
                <div className="RentalBookingSteps">
                  <span className="active">01 choose</span>
                  <span>02 dates</span>
                  <span>03 details</span>
                  <span>04 confirm</span>
                </div>
                <div className="RentalBookingBody">
                  <div>
                    <p className="Eyebrow">01 / your camera</p>
                    <div className="RentalPicker">
                      {activeCameras.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className={item.id === selectedId ? 'selected' : ''}
                          onClick={() => selectCamera(item)}
                        >
                          <Image src={item.image} alt="" width={80} height={60} />
                          <span>
                            <b>{cameraLabel(item)}</b>
                            <small>
                              {item.mp} MP · {currency(item.rateDay)}/day
                            </small>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="RentalBookingColumns">
                    <div>
                      <p className="Eyebrow">02 / pickup + return</p>
                      <div className="RentalFields">
                        <label>
                          <span>Pick-up date</span>
                          <input
                            type="date"
                            value={from}
                            min={isoToday()}
                            onChange={(event) => setFrom(event.target.value)}
                            onInput={(event) => setFrom(event.currentTarget.value)}
                            required
                          />
                        </label>
                        <label>
                          <span>Return date</span>
                          <input
                            type="date"
                            value={to}
                            min={from || isoToday()}
                            onChange={(event) => setTo(event.target.value)}
                            onInput={(event) => setTo(event.currentTarget.value)}
                            required
                          />
                        </label>
                        <label>
                          <span>Pick-up time</span>
                          <select
                            value={pickup}
                            onChange={(event) => setPickup(event.target.value)}
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {timeLabel(option)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          <span>Drop-off time</span>
                          <select
                            value={dropoff}
                            onChange={(event) => setDropoff(event.target.value)}
                          >
                            {options.map((option) => {
                              const days =
                                from && to
                                  ? tierFor(state.settings, hoursBetween(from, to, pickup, option))
                                  : 1
                              return (
                                <option
                                  key={option}
                                  value={option}
                                  disabled={Boolean(from && to && !days)}
                                >
                                  {timeLabel(option)}
                                  {from && to && days
                                    ? ` · ${days} ${days === 1 ? 'day' : 'days'}`
                                    : ''}
                                </option>
                              )
                            })}
                          </select>
                        </label>
                      </div>
                      <div className="RentalRuleNote">
                        {state.settings.maxDays} days ={' '}
                        {24 * state.settings.maxDays +
                          graceFor(state.settings, state.settings.maxDays)}{' '}
                        hours maximum. Grace periods:{' '}
                        {state.settings.graceHours
                          .map((hours, index) => `${index + 1} day + ${hours}h`)
                          .join(' · ')}
                        .
                      </div>
                      <label className="RentalCheckbox">
                        <input
                          type="checkbox"
                          checked={insurance}
                          onChange={(event) => setInsurance(event.target.checked)}
                        />
                        <span>
                          <b>
                            Add accidental coverage · {currency(state.settings.insurance)} / day
                          </b>
                          <small>Lost cameras are not covered.</small>
                        </span>
                      </label>
                      <label className="RentalCheckbox">
                        <input
                          type="checkbox"
                          checked={sessionCredit}
                          onChange={(event) => setSessionCredit(event.target.checked)}
                        />
                        <span>
                          <b>I have a Pose Palace studio session</b>
                          <small>
                            Tell the attendant at pickup to apply the first rental hour credit.
                          </small>
                        </span>
                      </label>
                    </div>
                    <aside className="RentalQuote">
                      <p className="Eyebrow">your total</p>
                      {camera && <p className="RentalQuoteCamera">{cameraLabel(camera)}</p>}
                      {quote ? (
                        <>
                          <div>
                            <span>{quote.days} day rental</span>
                            <b>{currency(quote.rental)}</b>
                          </div>
                          {quote.discount !== 0 && (
                            <div>
                              <span>three-day discount</span>
                              <b>{currency(quote.discount)}</b>
                            </div>
                          )}
                          {quote.coverage > 0 && (
                            <div>
                              <span>coverage</span>
                              <b>{currency(quote.coverage)}</b>
                            </div>
                          )}
                          {quote.credit !== 0 && (
                            <div>
                              <span>session credit</span>
                              <b>{currency(quote.credit)}</b>
                            </div>
                          )}
                          <div className="total">
                            <span>due at pickup</span>
                            <b>{currency(quote.dueAtPickup)}</b>
                          </div>
                          <small>
                            {currency(quote.deposit)} refundable deposit included. Latest return:{' '}
                            {dateLabel(quote.dueBack.split(' ')[0])} at{' '}
                            {timeLabel(quote.dueBack.split(' ')[1])}.
                          </small>
                        </>
                      ) : (
                        <p className="RentalQuoteEmpty">
                          Pick a camera and dates to see the rental total.
                        </p>
                      )}
                    </aside>
                  </div>
                  <div className="RentalBookingColumns RentalDetailsColumns">
                    <div>
                      <p className="Eyebrow">03 / renter details</p>
                      <div className="RentalFields">
                        <label>
                          <span>First + last name</span>
                          <input name="name" autoComplete="name" required />
                        </label>
                        <label>
                          <span>Mobile number</span>
                          <input name="phone" type="tel" autoComplete="tel" required />
                        </label>
                        <label className="full">
                          <span>Email</span>
                          <input name="email" type="email" autoComplete="email" required />
                        </label>
                        <label className="full">
                          <span>
                            Notes <i>(optional)</i>
                          </span>
                          <textarea
                            name="notes"
                            rows={3}
                            placeholder="Tell us about the occasion or ask a question."
                          />
                        </label>
                      </div>
                    </div>
                    <div className="RentalTerms">
                      <p className="Eyebrow">04 / before you send</p>
                      <label className="RentalCheckbox">
                        <input type="checkbox" required />
                        <span>
                          I agree to return the full kit on time and pay the refundable deposit at
                          pickup.
                        </span>
                      </label>
                      <label className="RentalCheckbox">
                        <input type="checkbox" required />
                        <span>
                          I understand this is a request; the studio confirms availability before
                          charging anything.
                        </span>
                      </label>
                      <button className="RentalSubmit" type="submit">
                        Request these dates <Arrow />
                      </button>
                      {error && <p className="RentalError">{error}</p>}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>

        <section className="RentalSection" id="policies">
          <div className="PageWrap RentalPolicyGrid">
            <div>
              <p className="Eyebrow">the rules, plainly</p>
              <h2>
                keep the camera,
                <br />
                <span>keep the trust.</span>
              </h2>
            </div>
            <div className="RentalPolicyPanel">
              <div>
                <h3>Pickup + drop-off</h3>
                <p>
                  Pickup and drop-off are available from {timeLabel(state.settings.open)} to{' '}
                  {timeLabel(state.settings.close)}. Your rental time is based on hours out, not
                  calendar dates.
                </p>
              </div>
              <div>
                <h3>Grace periods</h3>
                <p>
                  A one-day rental is 24 + {graceFor(state.settings, 1)} hours, two days is 48 +{' '}
                  {graceFor(state.settings, 2)} hours, and three days is 72 +{' '}
                  {graceFor(state.settings, 3)} hours.
                </p>
              </div>
              <div>
                <h3>Deposit + coverage</h3>
                <p>
                  {currency(state.settings.deposit)} refundable incidental deposit at pickup.
                  Optional coverage is {currency(state.settings.insurance)} per rental day; lost
                  cameras are not covered.
                </p>
              </div>
              <div>
                <h3>What comes with it</h3>
                <p>
                  Camera, charged battery or fresh batteries, empty SD card, and carrying bag.
                  Three-day rentals receive {state.settings.discountPct}% off the rental rate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="RentalFooter">
        <div className="PageWrap">
          <span>Pose Palace · digicam rentals</span>
          <Link href="/#top">Back to the studio ↗</Link>
          <Link href="/rentals/manager">Rental desk</Link>
        </div>
      </footer>
    </div>
  )
}

const BookingConfirmation = ({
  booking,
  cameras,
  onReset,
}: {
  booking: RentalBooking
  cameras: Camera[]
  onReset: () => void
}) => {
  const camera = cameras.find((item) => item.id === booking.cameraId)
  return (
    <div className="RentalConfirmation">
      <p className="Eyebrow">request received</p>
      <h3>you&apos;re on the list.</h3>
      <p>
        We&apos;ll confirm availability and pickup details by email. No payment was taken online.
      </p>
      <dl>
        <dt>Reference</dt>
        <dd>{booking.ref}</dd>
        <dt>Camera</dt>
        <dd>{camera ? cameraLabel(camera) : 'Selected camera'}</dd>
        <dt>Dates</dt>
        <dd>
          {dateLabel(booking.from)} – {dateLabel(booking.to)}
        </dd>
        <dt>Pickup</dt>
        <dd>{timeLabel(booking.pickup)}</dd>
        <dt>Latest return</dt>
        <dd>
          {dateLabel(booking.dueBack.split(' ')[0])} at {timeLabel(booking.dueBack.split(' ')[1])}
        </dd>
        <dt>Due at pickup</dt>
        <dd>
          {currency(booking.dueAtPickup)} <small>({currency(booking.deposit)} refundable)</small>
        </dd>
      </dl>
      <div className="RentalConfirmationActions">
        <button className="RentalSubmit" type="button" onClick={onReset}>
          Request another camera
        </button>
        <Link className="RentalGhostButton" href="/#top">
          Return to studio
        </Link>
      </div>
    </div>
  )
}

export const ManagerPortal = () => {
  const [state, setState] = useState<RentalState>(initialState)
  const [ready, setReady] = useState(false)
  const [password, setPassword] = useState('')
  const [signedIn, setSignedIn] = useState(false)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    setState(readState())
    setReady(true)
  }, [])
  const persist = (nextState: RentalState) => {
    setState(nextState)
    writeState(nextState)
    setNotice('Saved')
    window.setTimeout(() => setNotice(''), 1800)
  }
  const visibleBookings = useMemo(
    () =>
      filter === 'all'
        ? state.bookings
        : state.bookings.filter((booking) => booking.status === filter),
    [filter, state.bookings],
  )

  const login = (event: FormEvent) => {
    event.preventDefault()
    if (password === state.settings.pass) {
      setSignedIn(true)
      setError('')
    } else setError('That passcode does not match.')
  }

  const setStatus = (ref: string, status: RentalBooking['status']) =>
    persist({
      ...state,
      bookings: state.bookings.map((booking) =>
        booking.ref === ref ? { ...booking, status } : booking,
      ),
    })
  const toggleCamera = (id: string) =>
    persist({
      ...state,
      cameras: state.cameras.map((camera) =>
        camera.id === id ? { ...camera, active: !camera.active } : camera,
      ),
    })
  const updateSettings = (field: keyof RentalSettings, value: string) =>
    persist({ ...state, settings: { ...state.settings, [field]: Number(value) || 0 } })

  if (!ready) return null
  return (
    <div className="ManagerSite">
      <header className="RentalHeader">
        <div className="PageWrap RentalHeaderInner">
          <Link href="/rentals" className="RentalBrand">
            <Image src="/logo-short.png" alt="Pose Palace" width={178} height={50} priority />
          </Link>
          <span className="ManagerTitle">rental desk / manager</span>
          <Link href="/rentals" className="RentalBackLink">
            ← customer page
          </Link>
        </div>
      </header>
      {!signedIn ? (
        <main className="ManagerGate">
          <form onSubmit={login}>
            <p className="Eyebrow">private rental desk</p>
            <h1>
              sign in to
              <br />
              <span>manage the shelf.</span>
            </h1>
            <p>Bookings, customers, camera status, and pickup details live here.</p>
            <label>
              <span>Manager passcode</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoFocus
              />
            </label>
            <button className="RentalSubmit" type="submit">
              Open rental desk ↗
            </button>
            {error && <p className="RentalError">{error}</p>}
          </form>
        </main>
      ) : (
        <main className="ManagerMain">
          <div className="PageWrap">
            <div className="ManagerTop">
              <div>
                <p className="Eyebrow">today at pose palace</p>
                <h1>the rental desk.</h1>
              </div>
              <span className="ManagerNotice">
                {notice || `${state.bookings.length} total requests`}
              </span>
            </div>
            <section className="ManagerStats">
              <div>
                <b>{state.cameras.filter((camera) => camera.active).length}</b>
                <span>active cameras</span>
              </div>
              <div>
                <b>{state.bookings.filter((booking) => booking.status === 'reserved').length}</b>
                <span>reserved</span>
              </div>
              <div>
                <b>{state.bookings.filter((booking) => booking.status === 'out').length}</b>
                <span>out now</span>
              </div>
              <div>
                <b>{state.bookings.filter((booking) => booking.status === 'returned').length}</b>
                <span>returned</span>
              </div>
            </section>
            <section className="ManagerPanel">
              <div className="ManagerPanelHead">
                <div>
                  <p className="Eyebrow">booking ledger</p>
                  <h2>requests + rentals</h2>
                </div>
                <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                  <option value="all">All statuses</option>
                  <option value="reserved">Reserved</option>
                  <option value="out">Out now</option>
                  <option value="returned">Returned</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
              <div className="ManagerTableWrap">
                <table className="ManagerTable">
                  <thead>
                    <tr>
                      <th>Ref</th>
                      <th>Customer</th>
                      <th>Camera</th>
                      <th>Dates</th>
                      <th>Due</th>
                      <th>Status / action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleBookings.length ? (
                      visibleBookings.map((booking) => {
                        const camera = state.cameras.find((item) => item.id === booking.cameraId)
                        return (
                          <tr key={booking.ref}>
                            <td>
                              <b>{booking.ref}</b>
                              <small>{new Date(booking.created).toLocaleDateString()}</small>
                            </td>
                            <td>
                              {booking.name}
                              <small>
                                {booking.phone}
                                <br />
                                {booking.email}
                              </small>
                            </td>
                            <td>
                              {camera ? cameraLabel(camera) : booking.cameraId}
                              <small>
                                {booking.days} {booking.days === 1 ? 'day' : 'days'} ·{' '}
                                {currency(booking.dueAtPickup)}
                              </small>
                            </td>
                            <td>
                              {dateLabel(booking.from)} →<br />
                              {dateLabel(booking.to)}
                              <small>
                                {timeLabel(booking.pickup)} → {timeLabel(booking.dropoff)}
                              </small>
                            </td>
                            <td>
                              {dateLabel(booking.dueBack.split(' ')[0])}
                              <small>{timeLabel(booking.dueBack.split(' ')[1])}</small>
                            </td>
                            <td>
                              <strong className={`Status Status-${booking.status}`}>
                                {booking.status}
                              </strong>
                              <div className="ManagerActions">
                                {booking.status === 'reserved' && (
                                  <button
                                    type="button"
                                    onClick={() => setStatus(booking.ref, 'out')}
                                  >
                                    Mark picked up
                                  </button>
                                )}
                                {booking.status === 'out' && (
                                  <button
                                    type="button"
                                    onClick={() => setStatus(booking.ref, 'returned')}
                                  >
                                    Mark returned
                                  </button>
                                )}
                                {['reserved', 'out'].includes(booking.status) && (
                                  <button
                                    type="button"
                                    onClick={() => setStatus(booking.ref, 'canceled')}
                                  >
                                    Cancel
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td colSpan={6} className="ManagerEmpty">
                          No bookings here yet. Requests from the customer page will land in this
                          ledger.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
            <div className="ManagerTwoCol">
              <section className="ManagerPanel">
                <div className="ManagerPanelHead">
                  <div>
                    <p className="Eyebrow">camera shelf</p>
                    <h2>availability</h2>
                  </div>
                </div>
                <div className="ManagerCameraList">
                  {state.cameras.map((camera) => (
                    <div key={camera.id}>
                      <Image src={camera.image} alt="" width={76} height={55} />
                      <span>
                        <b>{cameraLabel(camera)}</b>
                        <small>
                          {camera.active ? 'Available to customers' : 'Hidden from customers'}
                        </small>
                      </span>
                      <button type="button" onClick={() => toggleCamera(camera.id)}>
                        {camera.active ? 'Retire' : 'Return to fleet'}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
              <section className="ManagerPanel">
                <div className="ManagerPanelHead">
                  <div>
                    <p className="Eyebrow">rental rules</p>
                    <h2>settings</h2>
                  </div>
                </div>
                <div className="ManagerSettings">
                  <label>
                    <span>Day rate</span>
                    <input
                      type="number"
                      value={state.settings.rateDay}
                      onChange={(event) => updateSettings('rateDay', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Hourly rate</span>
                    <input
                      type="number"
                      value={state.settings.rateHour}
                      onChange={(event) => updateSettings('rateHour', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Coverage / day</span>
                    <input
                      type="number"
                      value={state.settings.insurance}
                      onChange={(event) => updateSettings('insurance', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Deposit</span>
                    <input
                      type="number"
                      value={state.settings.deposit}
                      onChange={(event) => updateSettings('deposit', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>1-day grace hours</span>
                    <input
                      type="number"
                      value={state.settings.graceHours[0]}
                      onChange={(event) =>
                        persist({
                          ...state,
                          settings: {
                            ...state.settings,
                            graceHours: [
                              Number(event.target.value) || 0,
                              state.settings.graceHours[1],
                              state.settings.graceHours[2],
                            ],
                          },
                        })
                      }
                    />
                  </label>
                  <label>
                    <span>2-day grace hours</span>
                    <input
                      type="number"
                      value={state.settings.graceHours[1]}
                      onChange={(event) =>
                        persist({
                          ...state,
                          settings: {
                            ...state.settings,
                            graceHours: [
                              state.settings.graceHours[0],
                              Number(event.target.value) || 0,
                              state.settings.graceHours[2],
                            ],
                          },
                        })
                      }
                    />
                  </label>
                  <label>
                    <span>3-day grace hours</span>
                    <input
                      type="number"
                      value={state.settings.graceHours[2]}
                      onChange={(event) =>
                        persist({
                          ...state,
                          settings: {
                            ...state.settings,
                            graceHours: [
                              state.settings.graceHours[0],
                              state.settings.graceHours[1],
                              Number(event.target.value) || 0,
                            ],
                          },
                        })
                      }
                    />
                  </label>
                  <p>
                    Pickup + drop-off: {timeLabel(state.settings.open)} –{' '}
                    {timeLabel(state.settings.close)}. Maximum rental: {state.settings.maxDays}{' '}
                    days.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
