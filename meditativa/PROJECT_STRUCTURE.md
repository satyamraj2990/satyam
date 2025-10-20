# MediTatva - Project Structure

## 📁 Directory Overview

```
meditativa/
├── public/                      # Static assets
│   └── vite.svg
├── src/
│   ├── components/             # React components
│   │   ├── common/            # Shared components
│   │   │   ├── Button.tsx     # Reusable button component
│   │   │   ├── Card.tsx       # Reusable card component
│   │   │   └── ThemeToggle.tsx # Theme switcher
│   │   ├── user/              # Patient dashboard components
│   │   │   ├── Cart.tsx       # Shopping cart
│   │   │   ├── HealthInsights.tsx # Health analytics
│   │   │   ├── MedicineSearch.tsx # Medicine search & selection
│   │   │   ├── NearbyServices.tsx # Nearby health services
│   │   │   ├── PrescriptionUpload.tsx # OCR prescription
│   │   │   ├── PurchaseHistory.tsx # Order history
│   │   │   ├── Reminders.tsx  # Medicine reminders
│   │   │   └── UserDashboard.tsx # Main patient dashboard
│   │   └── store/             # Pharmacy dashboard components
│   │       ├── AISuggestions.tsx # AI insights
│   │       ├── Analytics.tsx  # Charts & analytics
│   │       ├── Billing.tsx    # Smart billing system
│   │       ├── Inventory.tsx  # Inventory management
│   │       └── StoreDashboard.tsx # Main store dashboard
│   ├── contexts/              # React contexts
│   │   └── ThemeContext.tsx   # Theme management
│   ├── data/                  # Mock data & constants
│   │   └── mockData.ts        # Sample medicines, orders, etc.
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # All type definitions
│   ├── App.css               # Main application styles
│   ├── App.tsx               # Root component with routing
│   ├── index.css             # Global styles
│   └── main.tsx              # Application entry point
├── dist/                     # Production build output
├── node_modules/             # Dependencies
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── FEATURES_CHECKLIST.md    # Complete features list
├── index.html               # HTML template
├── package.json             # Project dependencies
├── PROJECT_STRUCTURE.md     # This file
├── QUICKSTART.md            # Quick start guide
├── README.md                # Project documentation
├── tsconfig.app.json        # TypeScript app config
├── tsconfig.json            # TypeScript base config
├── tsconfig.node.json       # TypeScript node config
└── vite.config.ts           # Vite configuration
```

## 📦 Key Files Explained

### Entry Points
- **`src/main.tsx`** - Application entry, renders root component
- **`src/App.tsx`** - Root component, sets up routing and theme
- **`index.html`** - HTML template

### Core Application
- **`src/App.css`** - All application styles with CSS variables
- **`src/types/index.ts`** - TypeScript interfaces and types
- **`src/contexts/ThemeContext.tsx`** - Light/dark theme management

### Data Layer
- **`src/data/mockData.ts`** - Sample medicines, orders, analytics data

### Common Components
These are shared across both dashboards:
- **`Card.tsx`** - Flexible card container with gradient option
- **`Button.tsx`** - Styled button with variants
- **`ThemeToggle.tsx`** - Light/dark mode toggle

### User Dashboard Components (7 files)
1. **`UserDashboard.tsx`** - Main container with tab navigation
2. **`MedicineSearch.tsx`** - Search, filter, and add to cart
3. **`Cart.tsx`** - Shopping cart with checkout
4. **`PurchaseHistory.tsx`** - Orders with charts (Bar, Line)
5. **`Reminders.tsx`** - Medicine reminder management
6. **`HealthInsights.tsx`** - Analytics with charts (Pie, Bar)
7. **`NearbyServices.tsx`** - Nearby pharmacies/clinics/hospitals
8. **`PrescriptionUpload.tsx`** - OCR prescription scanning

### Store Dashboard Components (4 files)
1. **`StoreDashboard.tsx`** - Main container with tab navigation
2. **`Inventory.tsx`** - Add/edit/delete medicines
3. **`Billing.tsx`** - Create bills, generate PDF/QR
4. **`Analytics.tsx`** - Charts (Bar, Line, Pie, Area)
5. **`AISuggestions.tsx`** - AI predictions and recommendations

## 🎨 Styling Architecture

### CSS Variables (in App.css)
```css
:root {
  --gradient-start: #43e97b;
  --gradient-end: #000000;
  --accent-green: #43e97b;
  --accent-neon: #38f9d7;
  --shadow-color: rgba(67, 233, 123, 0.3);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme='light'] {
  --bg-primary: #f4f6fd;
  --bg-secondary: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border-color: #e0e0e0;
  --card-bg: #ffffff;
}

[data-theme='dark'] {
  --bg-primary: #121212;
  --bg-secondary: #1e1e1e;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border-color: #333333;
  --card-bg: #1e1e1e;
}
```

### Class Naming Convention
- **`.btn-*`** - Button variants
- **`.card-*`** - Card variants
- **`.nav-*`** - Navigation elements
- **`.dashboard-*`** - Dashboard-specific
- **`.form-*`** - Form elements
- **`.grid-*`** - Grid layouts
- **`.stats-*`** - Statistics cards
- **`.badge-*`** - Status badges

## 🔧 Configuration Files

### TypeScript
- **`tsconfig.json`** - Base TypeScript configuration
- **`tsconfig.app.json`** - App-specific TS config
- **`tsconfig.node.json`** - Node-specific TS config

### Build Tools
- **`vite.config.ts`** - Vite bundler configuration
- **`eslint.config.js`** - Code linting rules

### Package Management
- **`package.json`** - Dependencies and scripts
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build
  - `npm run lint` - Run ESLint

## 📊 Component Hierarchy

```
App (with Router & Theme)
│
├─ Navigation Bar
│  ├─ Logo
│  ├─ Dashboard Links
│  └─ Theme Toggle
│
├─ Route: / (User Dashboard)
│  └─ UserDashboard
│     ├─ Tab Navigation
│     └─ Tab Content
│        ├─ MedicineSearch
│        ├─ Cart
│        ├─ PurchaseHistory
│        ├─ Reminders
│        ├─ HealthInsights
│        ├─ NearbyServices
│        └─ PrescriptionUpload
│
└─ Route: /store (Store Dashboard)
   └─ StoreDashboard
      ├─ Tab Navigation
      └─ Tab Content
         ├─ Inventory
         ├─ Billing
         ├─ Analytics
         └─ AISuggestions
```

## 🗃️ Type System

All types are defined in `src/types/index.ts`:

- **Medicine** - Medicine product details
- **CartItem** - Medicine with quantity
- **Order** - Purchase order
- **Reminder** - Medicine reminder
- **StoreInventory** - Medicine with inventory data
- **Bill** - Store billing record
- **SalesData** - Analytics data
- **MedicineUsage** - User analytics
- **HealthService** - Nearby service info
- **Theme** - Light/dark theme type

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 768px) {
  /* Tablet and mobile styles */
}
```

## 🎯 State Management

- **Local State**: `useState` for component-specific state
- **Context API**: Theme management across app
- **LocalStorage**: Theme preference persistence

## 🔄 Data Flow

1. **Mock Data** (`mockData.ts`) → Components
2. **User Actions** → State Updates → UI Re-render
3. **Theme Toggle** → Context → CSS Variables → Re-style

## 🚀 Build Output

Production build creates:
- `dist/index.html` - Entry HTML
- `dist/assets/*.css` - Bundled styles (~10 KB)
- `dist/assets/*.js` - Bundled JavaScript (~1.3 MB total)

## 📚 Dependencies

### Production
- react, react-dom: UI framework
- react-router-dom: Routing
- recharts: Charts
- jspdf: PDF generation
- qrcode: QR code generation
- lucide-react: Icons

### Development
- typescript: Type checking
- vite: Build tool
- eslint: Code linting
- @types/*: TypeScript definitions

## 🎨 Design Patterns Used

1. **Component Composition** - Small, reusable components
2. **Props Pattern** - Data flow via props
3. **Context Pattern** - Global theme state
4. **Container/Presentational** - Logic vs UI separation
5. **Controlled Components** - Form state management

---

**Total Lines of Code**: ~3,000+
**Total Components**: 20+
**Total Routes**: 2
**Total Charts**: 8+
**Build Size**: ~1.3 MB (minified)
