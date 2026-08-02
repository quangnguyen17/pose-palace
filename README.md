# Pose Palace Studio

Pose Palace is a Next.js website for the Garden Grove self-portrait studio. The studio landing page remains focused on sessions, rooms, rates, visit information, and social links. Digicam rentals now live in a separate rental desk experience based on the supplied `posepalace-digicam-rentals_3.html` mock site.

## Run Locally

Requirements: Node.js 18+ and Yarn.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
yarn build
yarn lint
git diff --check
```

## Verification

The current manual smoke pass covered:

- Seven rental cards and seven camera images rendering on `/rentals`
- One-day quote calculation with coverage and refundable deposit
- Three-day quote calculation with 10% discount and the 72 + 6 hour grace rule
- Pickup and drop-off time options from 9:00 AM through 7:30 PM
- Invalid manager passcode rejection
- Valid manager passcode opening `/rentals/manager`
- Manager camera controls and rental settings being visible
- `/rentals/request` redirecting to `/rentals`
- Studio homepage rendering without the inline rental catalog
- All key routes returning HTTP 200 while the development server is running

`yarn build` has compiled successfully for this implementation. A later retry in an offline environment was blocked by `next/font` being unable to fetch the Google-hosted Archivo, DM Mono, and Newsreader font files. The rental implementation itself did not produce TypeScript or lint errors. Existing unrelated warnings remain in `src/app/check-in/page.tsx` and `src/app/components/Icons.tsx`.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Pose Palace studio landing page |
| `/rentals` | Customer-facing digicam catalog, booking flow, quotes, and policies |
| `/rentals/manager` | Password-protected rental desk for bookings, camera availability, and settings |
| `/rentals/request` | Compatibility redirect to `/rentals` |
| `/check-in` | Existing studio check-in experience |

The landing-page rental links open `/rentals` instead of rendering the rental catalog inline. This keeps the original studio website uncluttered while preserving a complete, separate rental application.

## Rental Catalog

The rental page preserves the seven cameras, photos, specs, descriptions, and pricing from the supplied HTML mock site:

- Panasonic Lumix DMC-LX2
- HP Photosmart E427
- Canon PowerShot A480
- Canon PowerShot A495
- Sony Cyber-shot DSC-S2100
- Panasonic Lumix DMC-FP2
- Fujifilm FinePix AX655

Camera photos are stored in `public/cameras/`. Catalog data and default rental rules are in `src/app/rentals/data.ts`.

## Rental Rules Implemented

The customer flow currently follows the source HTML rules:

- Daily rental rate: `$24/day`
- Walk-in hourly rate shown by the rental desk: `$7/hour`
- Optional accidental coverage: `$15/day`
- Refundable incidental deposit: `$80`, due at pickup
- Pickup and drop-off window: `9:00 AM–7:30 PM`
- Maximum online rental: 3 days
- Grace periods: 1 day + 2 hours, 2 days + 3 hours, 3 days + 6 hours
- Three-day rental discount: 10%
- Studio-session customer credit: first rental hour credit
- Rental time is calculated from pickup and return times, not only calendar dates
- No payment is taken online; requests are recorded as `reserved` until managed at the desk

The customer flow checks overlapping reservations, calculates the rental total, includes the deposit in the pickup amount, and shows the latest legal return time.

## Manager Rental Desk

Open [http://localhost:3000/rentals/manager](http://localhost:3000/rentals/manager).

Manager passcode for the current prototype:

```text
palace2k
```

The manager portal currently supports:

- Sign-in gate
- Booking ledger with status filters
- Marking reservations as picked up, returned, or canceled
- Camera availability controls: retire or return a camera to the fleet
- Editing day rate, hourly rate, coverage, deposit, and grace-period hours
- Customer booking details, dates, pickup/drop-off times, latest return, and amount due

### Important Security Note

This is a local prototype gate, not production authentication. The passcode is present in the client bundle and rental data is stored in the browser. Anyone with browser developer tools can bypass it. Do not use this version for real customer personal information, cross-device operations, or production access control until a backend authentication system is added.

## Data Storage and Backend Decision

### What is stored now?

Rental state is stored in browser `localStorage` under:

```text
pose-palace-rentals-v1
```

This includes:

- Booking requests and statuses
- Camera active/retired state
- Rental rates and settings
- Grace-period rules
- The prototype manager passcode

Data is local to one browser profile and device. Clearing browser storage, changing browsers, or using another device will not show the same bookings.

The existing Firebase setup is used for Analytics initialization only. It is not the rental database. There is currently no Supabase, API route, server database, payment service, or Google Calendar integration.

### Do we need a full-stack stack?

Not for the current single-device prototype. Next.js plus browser storage is enough to test the workflow and operate a very small private desk from one device.

A backend is recommended before real launch. The smallest practical next step would be:

1. Supabase Postgres for cameras, bookings, customers, settings, and availability blocks.
2. Supabase Auth for manager accounts and secure sessions instead of a client-side passcode.
3. Next.js server actions or API routes for server-side validation and booking conflicts.
4. Row-level security so customers and managers see only the records they should see.
5. Optional email notifications and payment processing after the booking rules are stable.

Google Calendar is intentionally not integrated yet.

## Project Structure

```text
src/app/
├── components/
│   ├── Home.tsx              # Studio landing page only
│   ├── Page.tsx              # Shared layout and Firebase Analytics bootstrap
│   └── RentalRequestForm.tsx # Legacy compatibility component
├── rentals/
│   ├── data.ts               # Seven cameras, rules, types, and storage key
│   ├── RentalDesk.tsx        # Customer booking flow and manager portal
│   ├── page.tsx              # Customer rental page
│   ├── manager/page.tsx      # Manager desk route
│   └── request/page.tsx      # Redirect from the previous request URL
├── page.tsx                  # Studio home route
├── check-in/page.tsx         # Existing studio check-in route
├── firebase.ts               # Firebase Analytics initialization only
├── layout.tsx                # Metadata, fonts, and global CSS
└── styles.css                # Studio and rental application styles
public/cameras/               # Seven rental camera photos
```

## Existing Studio Links

- Website: [posepalacestudio.com](https://www.posepalacestudio.com)
- Instagram: [@posepalacestudio](https://www.instagram.com/posepalacestudio/)
- TikTok: [@posepalacestudio](https://www.tiktok.com/@posepalacestudio)
- Facebook: [Pose Palace Studio](https://www.facebook.com/profile.php?id=61562108288648)

© Crystal Lighthouse LLC. All rights reserved.
