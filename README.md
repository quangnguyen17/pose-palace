# Pose Palace Studio

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.posepalacestudio.com)](https://www.posepalacestudio.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-ready-orange)](https://web.dev/progressive-web-apps/)

A modern, self-service photo studio website built with Next.js 14 and TypeScript.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Performance Optimized**: Server-side rendering and optimized assets
- **Mobile First**: Fully responsive across all device sizes
- **PWA Support**: Installable as a Progressive Web App
- **Advanced SEO**:
  - OpenGraph and Twitter Cards integration
  - Structured data for local business
  - Auto-generated sitemap
  - Optimized robots.txt
  - Rich metadata implementation

## 🚀 Live Demo

Visit our live website: [Pose Palace Studio](https://www.posepalacestudio.com)

## 💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules with CSS-in-JS
- **Deployment**: [Vercel](https://vercel.com)
- **Font**: [Roboto](https://fonts.google.com/specimen/Roboto) (Next.js optimized)
- **SEO Tools**:
  - OpenGraph protocol
  - Twitter Cards API
  - Schema.org markup
  - XML Sitemap
- **PWA Features**:
  - Web App Manifest
  - Service Worker
  - Offline support
  - Install prompts

## 🛠️ Development

### Prerequisites

- Node.js 18+
- Yarn package manager

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/quangnguyen17/pose-palace.git
   cd pose-palace
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure

```text
pose-palace/
├── src/
│   └── app/
│       ├── components/          # React components
│       │   ├── Card/           # Card component for pricing
│       │   ├── Collection/     # Photo gallery
│       │   ├── Header/         # Navigation and branding
│       │   ├── Hero/           # Landing section
│       │   ├── Loading/        # Loading states
│       │   ├── Modal/          # Modal dialogs
│       │   ├── Page/           # Page wrapper
│       │   └── Pills/          # Action buttons
│       ├── check-in/           # Check-in page
│       ├── constants.ts        # Constants and shared values
│       ├── firebase.ts         # Firebase configuration
│       ├── layout.tsx          # Root layout with SEO metadata
│       ├── page.tsx            # Home page
│       └── styles.css          # Global styles
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt            # Search engine directives
│   ├── sitemap.xml          # Site structure
│   └── *.png                # Images and icons
├── next.config.mjs          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Project dependencies
```

## 📱 Key Components

- **Header**: Main navigation and branding
- **Hero**: Landing section with main value proposition
- **Cards**: Reusable component for pricing and features
- **Collection**: Photo gallery component
- **Pills**: Call-to-action buttons

## 🎨 Color Scheme

- Primary: #FF6B6B (Coral)
- Secondary: #4ECDC4 (Turquoise)
- Accent: #6C63FF (Purple)
- Background: #f8f9fa (Light Gray)
- Text: #4A5568 (Dark Gray)

## 📝 License

© 2024 Crystal Lighthouse LLC. All rights reserved.

## 🌐 Links

- [Website](https://www.posepalacestudio.com)
- [Instagram](https://www.instagram.com/posepalacestudio)
- [Facebook](https://www.facebook.com/posepalacestudio)
