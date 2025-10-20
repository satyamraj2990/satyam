# MediTatva - Quick Start Guide

## 🚀 Getting Started

### Installation
```bash
cd meditativa
npm install
```

### Development
```bash
npm run dev
```
The application will be available at http://localhost:5173

### Production Build
```bash
npm run build
npm run preview
```

## 📱 Application Overview

### Two Dashboards

#### 1. Patient Dashboard (`/`)
Navigate to the root URL to access the patient/user dashboard with the following features:

**Search Medicines Tab**
- Search for medicines by name or category
- View medicine details including price, stock, manufacturer
- AI-powered substitute recommendations for out-of-stock items
- Add medicines to cart with one click

**Cart Tab**
- View all items in cart
- Update quantities or remove items
- Simulated checkout process with payment options
- Address and contact information form

**History Tab**
- View all past orders with details
- Visual analytics with BarChart (monthly spending)
- LineChart showing medicine usage trends over time
- Track spending patterns

**Reminders Tab**
- Create medicine reminders with custom schedules
- Set dosage, frequency, and time
- Enable auto-refill subscriptions
- Visual cards for each reminder

**Insights Tab**
- Health analytics dashboard
- PieChart showing medicine category distribution
- Spending trend analysis
- AI wellness recommendations and tips
- Total spending and monthly averages

**Nearby Services Tab**
- Interactive map view (simulated)
- List of nearby pharmacies, clinics, and hospitals
- Distance and contact information
- Get directions or call directly

**Upload Prescription Tab**
- OCR-powered prescription scanning (simulated)
- Drag and drop file upload
- Automatic extraction of medicine names
- One-click add all medicines to cart

#### 2. Store Dashboard (`/store`)
Navigate to `/store` to access the pharmacy management dashboard:

**Inventory Tab**
- Add new medicines to inventory
- Edit existing medicine details
- Delete medicines from inventory
- Low stock alerts with visual warnings
- Track profit margins per medicine
- Auto-calculated profit (30% margin)

**Smart Billing Tab**
- Create bills for customers
- Add multiple items to bill
- Auto-calculate totals
- Generate PDF bills with QR codes
- Download or share bills
- Track recent bills with profit information

**Analytics Tab**
- Comprehensive analytics dashboard
- BarChart: Daily sales over the week
- LineChart: Monthly revenue and profit trends
- PieChart: Top-selling medicines distribution
- AreaChart: Inventory trends over time
- Key metrics cards (revenue, profit, sales)

**AI Insights Tab**
- Weekly sales predictions
- Trend analysis (up/down/stable)
- Smart stock recommendations
- Priority-based restocking alerts
- Business insights and opportunities
- AI-powered optimization suggestions

## 🎨 Theme Toggle

Click the moon/sun icon in the navigation bar to switch between:
- **Light Mode**: Clean white background (#f4f6fd)
- **Dark Mode**: Deep dark background (#121212)

The theme preference is saved in localStorage.

## 🎯 Key Features Explained

### AI-Powered Features
1. **Medicine Substitutes**: When a medicine is out of stock, AI suggests alternative medicines
2. **Sales Predictions**: Store dashboard predicts sales for the upcoming week
3. **Stock Optimization**: Smart recommendations for when to restock
4. **Wellness Tips**: Personalized health recommendations based on purchase history

### Charts & Visualizations
All charts are built with Recharts and feature:
- Smooth animations on load
- Interactive tooltips
- Gradient colors matching the theme (#43e97b → #000000)
- Responsive design for all screen sizes

### Smart Features
1. **Auto-calculated Totals**: All pricing and totals are calculated automatically
2. **Low Stock Alerts**: Inventory automatically alerts when stock is low
3. **Profit Tracking**: Real-time profit calculations on all transactions
4. **PDF Generation**: Bills are generated as downloadable PDFs with QR codes

## 📊 Sample Data

The application comes pre-loaded with:
- 8 sample medicines across different categories
- 3 sample orders for purchase history
- 2 sample reminders
- 7 days of sales data
- 7 months of revenue data
- 4 nearby health services

## 🎨 Design System

### Colors
- Primary Gradient: #43e97b (Green) → #000000 (Black)
- Accent Green: #43e97b
- Accent Neon: #38f9d7

### Typography
- Headings: Montserrat (600 weight)
- Body: Roboto (400 weight)

### Animations
- Hover effects: Scale and shadow glow
- Smooth transitions: 0.3s cubic-bezier
- Theme toggle: Animated transition between modes

## 🔧 Customization

### Adding New Medicines
1. Go to Store Dashboard → Inventory
2. Click "Add Medicine"
3. Fill in all required fields
4. Medicine appears in both store inventory and user search

### Creating Bills
1. Go to Store Dashboard → Smart Billing
2. Select medicine and quantity
3. Add multiple items
4. Click "Generate Bill & Download PDF"

### Setting Reminders
1. Go to Patient Dashboard → Reminders
2. Click "Add Reminder"
3. Fill in medicine details and schedule
4. Enable subscription for auto-refill

## 💡 Tips

1. **Navigation**: Use the navigation links at the top to switch between dashboards
2. **Theme**: Toggle between light and dark mode for comfort
3. **Mobile**: The app is fully responsive - try it on mobile!
4. **Charts**: Hover over chart elements to see detailed information
5. **Search**: Medicine search is case-insensitive and searches both name and category

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Dev server won't start?**
- Check if port 5173 is available
- Try `npm run dev -- --port 3000` to use a different port

**Charts not showing?**
- Check browser console for errors
- Ensure all dependencies are installed
- Clear browser cache

## 📦 Dependencies

Main packages used:
- React 19 + TypeScript
- Vite 7 (build tool)
- Recharts 3 (charts)
- React Router 7 (navigation)
- jsPDF 3 (PDF generation)
- QRCode 1.5 (QR codes)
- Lucide React (icons)

## 🌟 Next Steps

Consider adding:
- Real authentication and user management
- Backend API integration
- Real-time notifications
- Payment gateway integration
- Actual map integration (Google Maps/Mapbox)
- Real OCR for prescription scanning
- Database for persistent storage
- Email/SMS notifications for reminders

---

Enjoy using MediTatva! 🎉
