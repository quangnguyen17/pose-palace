export type Camera = {
  id: string
  brand: string
  model: string
  year: number
  color: string
  image: string
  mp: string
  zoom: string
  extra: string
  note: string
  rateDay: number
  rateHour: number
  active: boolean
}

export type RentalBooking = {
  ref: string
  cameraId: string
  from: string
  to: string
  pickup: string
  dropoff: string
  days: number
  hours: number
  dueBack: string
  discount: number
  insurance: boolean
  subtotal: number
  deposit: number
  dueAtPickup: number
  name: string
  phone: string
  email: string
  notes: string
  status: 'reserved' | 'out' | 'returned' | 'canceled'
  created: string
}

export type RentalSettings = {
  rateDay: number
  rateHour: number
  insurance: number
  deposit: number
  open: string
  close: string
  maxDays: number
  graceHours: number[]
  discountDays: number
  discountPct: number
  pass: string
}

export const rentalSettings: RentalSettings = {
  rateDay: 24,
  rateHour: 7,
  insurance: 15,
  deposit: 80,
  open: '09:00',
  close: '19:30',
  maxDays: 3,
  graceHours: [2, 3, 6],
  discountDays: 3,
  discountPct: 10,
  pass: 'palace2k',
}

export const rentalCameras: Camera[] = [
  {
    id: 'lx2',
    brand: 'Panasonic',
    model: 'Lumix DMC-LX2',
    year: 2006,
    color: '#151515',
    image: '/cameras/lx2.jpg',
    mp: '10.2',
    zoom: '4x Leica',
    extra: 'Li-ion pack · 28–112mm equiv · f/2.8',
    note: 'The enthusiast one. Leica glass, 16:9 sensor, shoots RAW. Slowest to learn, best files.',
    rateDay: 24,
    rateHour: 7,
    active: true,
  },
  {
    id: 'e427',
    brand: 'HP',
    model: 'Photosmart E427',
    year: 2007,
    color: '#b9bcbd',
    image: '/cameras/e427.jpg',
    mp: '6.0',
    zoom: '5x digital',
    extra: '2×AA · fixed focus · 2" LCD',
    note: 'Six megapixels, no optical zoom, one job. The most 2007-looking photos we can give you.',
    rateDay: 24,
    rateHour: 7,
    active: true,
  },
  {
    id: 'a480',
    brand: 'Canon',
    model: 'PowerShot A480',
    year: 2009,
    color: '#1b3a8f',
    image: '/cameras/a480.jpg',
    mp: '10.0',
    zoom: '3.3x optical',
    extra: '2×AA · 6.6–21.6mm · f/3.0',
    note: 'Cobalt blue, chunky, forgiving. If you have never used a digicam, start here.',
    rateDay: 24,
    rateHour: 7,
    active: true,
  },
  {
    id: 'a495',
    brand: 'Canon',
    model: 'PowerShot A495',
    year: 2010,
    color: '#c0202b',
    image: '/cameras/a495.jpg',
    mp: '10.0',
    zoom: '3.3x optical',
    extra: '2×AA · 6.6–21.6mm · f/3.0',
    note: 'The A480 in red, a year newer. Flash is punchy — this is the party camera.',
    rateDay: 24,
    rateHour: 7,
    active: true,
  },
  {
    id: 's2100',
    brand: 'Sony',
    model: 'Cyber-shot DSC-S2100',
    year: 2010,
    color: '#4a4e52',
    image: '/cameras/s2100.jpg',
    mp: '12.1',
    zoom: '3x optical',
    extra: '2×AA · 3" LCD · Memory Stick / SD',
    note: 'Big 3-inch screen, runs on AAs you can buy anywhere. The dependable pick for a long day.',
    rateDay: 24,
    rateHour: 7,
    active: true,
  },
  {
    id: 'fp2',
    brand: 'Panasonic',
    model: 'Lumix DMC-FP2',
    year: 2010,
    color: '#6e7378',
    image: '/cameras/fp2.jpg',
    mp: '14.1',
    zoom: '4x optical',
    extra: 'Li-ion pack · 35–140mm equiv',
    note: 'Flat as a deck of cards with a sliding lens cover. Disappears in a pocket.',
    rateDay: 24,
    rateHour: 7,
    active: true,
  },
  {
    id: 'ax655',
    brand: 'Fujifilm',
    model: 'FinePix AX655',
    year: 2012,
    color: '#0d0d0d',
    image: '/cameras/ax655.jpg',
    mp: '16.0',
    zoom: '5x optical',
    extra: '2×AA · 5.9–29.5mm · 720p video',
    note: 'Newest and highest resolution of the seven, and it shoots HD video with sound.',
    rateDay: 24,
    rateHour: 7,
    active: true,
  },
]

export const rentalKey = 'pose-palace-rentals-v1'

export const cameraLabel = (camera: Camera) => `${camera.brand} ${camera.model}`
