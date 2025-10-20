# MediTatva - Smart Pharmacy Management System

A modern, AI-powered pharmacy application with dual dashboards for patients and pharmacy stores.

## 🌟 Features

### User Dashboard (Patient)
- **Smart Medicine Search** - Search medicines with real-time availability
- **AI-Powered Substitutes** - Get alternative medicine suggestions
- **Shopping Cart & Checkout** - Seamless purchasing experience
- **Purchase History** - Track all orders with visual analytics
- **Medicine Reminders** - Never miss a dose with smart notifications
- **Health Insights** - Personalized health analytics and spending trends
- **Nearby Services** - Find nearby pharmacies, clinics, and hospitals
- **Prescription Upload** - OCR-powered prescription scanning

### Store Dashboard (Pharmacy)
- **Inventory Management** - Add, edit, delete medicines with low-stock alerts
- **Smart Billing** - Generate bills with PDF and QR code support
- **Analytics Dashboard** - Comprehensive charts (Bar, Line, Pie, Area)
- **AI Suggestions** - Predictive analytics for sales and stock optimization
- **Profit Tracking** - Real-time profit calculations per item and total

## 🎨 Design Features

- **Green-to-Black Gradient Theme** (#43e97b → #000000)
- **Dark/Light Mode Toggle** with smooth transitions
- **Glassmorphism Effects** on cards and components
- **Smooth Animations** on hover and interactions
- **Fully Responsive** for mobile, tablet, and desktop
- **Modern Typography** - Montserrat for headings, Roboto for body

## 🚀 Tech Stack

- **React 19** with TypeScript
- **Vite** for blazing-fast development
- **Recharts** for beautiful, responsive charts
- **React Router** for navigation
- **jsPDF** for bill generation
- **QRCode** for QR code generation
- **Lucide React** for icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:5173 in your browser

## 📱 Navigation

- **Patient Dashboard** - Main dashboard for users/patients
- **Store Dashboard** - Management interface for pharmacy owners

## 🎨 Customization

The application uses CSS variables for theming. Edit `src/App.css` to customize:

```css
:root {
  --gradient-start: #43e97b;
  --gradient-end: #000000;
  --accent-green: #43e97b;
  --accent-neon: #38f9d7;
}
```

## 📊 Features Breakdown

### Charts & Analytics
- **BarChart** - Monthly spending, daily sales
- **LineChart** - Revenue trends, medicine usage
- **PieChart** - Category distribution, top sellers
- **AreaChart** - Inventory trends

### AI Features
- Medicine substitute recommendations
- Sales predictions
- Stock optimization suggestions
- Demand forecasting
- Smart restocking alerts

## 🔒 Security Note

This is a demo application. In production:
- Implement proper authentication
- Secure API endpoints
- Encrypt sensitive data
- Add HTTPS
- Implement proper error handling

## 📝 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
