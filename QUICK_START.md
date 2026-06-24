# Quick Start Guide - Provimar Website

## 🚀 Running the Website

### Step 1: Install Dependencies (if not already done)
```bash
cd provimar-website
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### Step 3: Build for Production
```bash
npm run build
npm start
```

## 📧 Important: Email Configuration

The primary contact email is: **suppliers@provimarcr.com**

All "Request a Quote" buttons throughout the site use this email with a pre-formatted mailto link that includes:
- Vessel Name
- IMO Number
- Port
- ETA (Estimated Time of Arrival)
- Requested Items

## 🗺️ Site Navigation

- **Homepage**: `/` - Main landing page with hero, services overview, and CTAs
- **Services**: `/services` - Detailed list of all services offered
- **About**: `/about` - Company information and values
- **Contact**: `/contact` - Contact information and FAQ

## ✨ Key Features

### Multiple CTAs
The website includes multiple "Request a Quote" buttons:
1. **Navbar** - Always visible sticky navigation
2. **Hero Section** - Main homepage CTA
3. **Services Overview** - After services section
4. **CTA Section** - Dedicated call-to-action section
5. **Footer** - Contact information
6. **Floating Button** - Appears when scrolling (bottom right)

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### Performance
- Fast loading with Next.js
- Optimized images
- Minimal JavaScript

## 🎨 Customization

### Change Email Address
Search and replace `suppliers@provimarcr.com` in these files:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/FloatingEmailButton.tsx`
- `components/Hero.tsx`
- `components/CTASection.tsx`
- `app/contact/page.tsx`

### Modify Services
Edit service lists in:
- `app/services/page.tsx` - Full services page
- `components/ServicesOverview.tsx` - Homepage overview

### Update Ports
Modify port information in:
- `components/PortsCoverage.tsx`
- `app/about/page.tsx`

### Change Colors
Edit the maritime color palette in:
- `tailwind.config.ts` - Look for the `maritime` color definitions

## 🌐 Deployment Options

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Option 3: Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `.next` folder and other files
3. Run `npm start` on the server

## 📱 Testing

### Desktop
- Open http://localhost:3000 in Chrome, Firefox, or Edge
- Test all navigation links
- Click "Request a Quote" buttons to verify email opens

### Mobile
- Use browser DevTools (F12) to test responsive design
- Test on actual mobile devices if possible

### Email Links
- Click any "Request a Quote" button
- Verify email client opens with:
  - To: suppliers@provimarcr.com
  - Subject: Quote Request
  - Pre-filled body with vessel information fields

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Dependencies Issues
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Check Node.js version (requires 18+):
```bash
node --version
```

## 📞 Support

For technical issues with the website, check:
- README.md for detailed documentation
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs

For business inquiries:
**Email**: suppliers@provimarcr.com

---

**Ready to launch!** 🚢
