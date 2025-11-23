# Sutherland Event Studio Website

A modern, responsive website for Sutherland Event Studio built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎯 Smooth scrolling navigation
- 📸 Image gallery with modal view
- 📝 Contact form
- 💬 Client testimonials
- 🎭 Multiple sections (Hero, About, Services, Gallery, Testimonials, Contact)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   ├── page.tsx        # Homepage with all sections
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Gallery.tsx     # Gallery section
│   ├── Testimonials.tsx # Testimonials section
│   ├── Contact.tsx     # Contact form section
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Customization

- Update contact information in `components/Contact.tsx` and `components/Footer.tsx`
- Replace placeholder images with actual event photos
- Modify colors in `tailwind.config.js`
- Update content in respective component files

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer

