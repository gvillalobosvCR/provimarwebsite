# Provimar Ship Suppliers Website

A modern, professional maritime supply website built with Next.js, TypeScript, and Tailwind CSS.

## 🚢 About

This website serves **Provimar Ship Suppliers**, a leading provider of comprehensive ship supply and provisioning services in Costa Rica. The site is designed for ship agents, captains, and logistics coordinators who need to request quotes quickly and efficiently.

## ✨ Features

- **Modern Design**: Clean, professional maritime-themed interface
- **Responsive**: Fully optimized for mobile, tablet, and desktop
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Email-First CTA**: Multiple prominent "Request a Quote" buttons that open email client
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Smooth Animations**: Professional hover effects and transitions
- **24/7 Service Badge**: Prominent availability indicator
- **Floating Email Button**: Always-accessible contact option

## 📧 Primary Contact

**Email**: suppliers@provimarcr.com

All "Request a Quote" buttons use a pre-formatted mailto link with:
- Vessel Name
- IMO Number
- Port
- ETA
- Requested Items

## 🗂️ Pages

1. **Homepage** (`/`)
   - Hero section with main CTA
   - Services overview
   - Why choose us
   - Ports coverage
   - Final CTA section

2. **Services** (`/services`)
   - Comprehensive list of all services
   - Ship Provisions
   - Deck & Engine Stores
   - Cabin Stores
   - Safety Equipment
   - Bonded Stores
   - Logistics & Delivery
   - Technical Services
   - 24/7 Support

3. **About** (`/about`)
   - Company information
   - Our values
   - Why choose Provimar
   - Port coverage details

4. **Contact** (`/contact`)
   - Email contact information
   - Service area details
   - FAQ section
   - Response time guarantee

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd provimar-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
provimar-website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CTASection.tsx
│   ├── FloatingEmailButton.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── PortsCoverage.tsx
│   ├── ServicesOverview.tsx
│   └── WhyChooseUs.tsx
├── public/
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Maritime blue (#0284c7)
- **Secondary**: Various maritime shades
- **Accent**: White and light blues
- **Text**: Gray scale for readability

### Typography
- **Font Family**: Inter (sans-serif)
- **Headings**: Bold, large sizes for impact
- **Body**: Readable sizes with proper line height

### Components
- Sticky navigation bar
- Floating email button (appears on scroll)
- Animated hero section
- Service cards with hover effects
- Port coverage cards
- CTA sections throughout
- Professional footer

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Updating Contact Email

The email is defined in multiple components. Search for `suppliers@provimarcr.com` and replace with your email address.

### Modifying Services

Edit the services array in:
- `app/services/page.tsx` - Full services page
- `components/ServicesOverview.tsx` - Homepage overview

### Changing Ports

Update the ports array in:
- `components/PortsCoverage.tsx`
- `app/about/page.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted

## 📄 License

© 2026 Provimar Ship Suppliers. All rights reserved.

## 🤝 Support

For website issues or questions, contact the development team.

For ship supply inquiries, email: suppliers@provimarcr.com
