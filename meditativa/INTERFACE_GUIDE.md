# 🌐 MediTatva Interface Guide

## 🚀 Access the Application

### **Live Development Server**
```
🌐 URL: http://localhost:5173
```

**The application is now RUNNING!** Open this URL in your web browser.

---

## 📱 Interface Overview

### 🏠 **Landing Page - Patient Dashboard**

When you first open the application, you'll see:

#### **Navigation Bar (Top)**
```
┌─────────────────────────────────────────────────────────┐
│ MediTatva    [Patient] [Store Dashboard]    [🌙]       │
└─────────────────────────────────────────────────────────┘
```
- **Logo**: "MediTatva" in gradient green
- **Navigation Links**: Switch between dashboards
- **Theme Toggle** (🌙/☀️): Click to switch light/dark mode

---

### 1️⃣ **Patient Dashboard Interface** (`/`)

#### **Tab Navigation**
```
[Search Medicines] [Cart 🔴2] [History] [Reminders] [Insights] [Nearby Services] [Upload Prescription]
```

#### **Tab 1: Search Medicines**
```
┌─────────────────────────────────────────────────────────┐
│ 🔍 [Search medicines by name or category...]            │
└─────────────────────────────────────────────────────────┘

┌──────────┐  ┌──────────┐  ┌──────────┐
│ 💊       │  │ 💊       │  │ 💊       │
│ Paracet. │  │ Amoxicil.│  │ Cetiriz. │
│ Pain Rel.│  │ Antibio. │  │ Allergy  │
│ ₹50      │  │ ₹120     │  │ ₹35      │
│ [Add +]  │  │ [Add +]  │  │ [Add +]  │
└──────────┘  └──────────┘  └──────────┘
```
- **Features**: Live search, medicine cards, stock info
- **Click any card** to see full details and AI substitutes

#### **Tab 2: Cart**
```
┌─────────────────────────────────────────────────────────┐
│ Shopping Cart                                            │
├─────────────────────────────────────────────────────────┤
│ Paracetamol 500mg        [-] 2 [+]    ₹100    [🗑️]     │
│ Cetirizine 10mg          [-] 1 [+]    ₹35     [🗑️]     │
├─────────────────────────────────────────────────────────┤
│ Total:                                 ₹135             │
│                                                          │
│           [💳 Proceed to Checkout]                      │
└─────────────────────────────────────────────────────────┘
```

#### **Tab 3: Purchase History**
```
┌─────────────────────────────────────────────────────────┐
│ Order #ORD001           15 Oct 2025        ₹135         │
│ • Paracetamol × 2                                       │
│ • Cetirizine × 1                            [Completed] │
└─────────────────────────────────────────────────────────┘

📊 Monthly Spending Trend (Bar Chart)
📈 Medicine Usage Trend (Line Chart)
```

#### **Tab 4: Reminders**
```
┌──────────────────────────────────────────┐
│ 💊 Metformin 500mg                       │
│ 🕐 Twice daily: 08:00, 20:00            │
│ 📅 Since 1 Oct 2025                      │
│ 🔄 Subscription Active                   │
└──────────────────────────────────────────┘

[+ Add Reminder]
```

#### **Tab 5: Health Insights**
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ 📈 ₹9,950│ │ 💖 ₹1,421│ │ ⚡ 24    │
│ Total    │ │ Monthly  │ │ Medicines│
│ Spending │ │ Average  │ │ Taken    │
└──────────┘ └──────────┘ └──────────┘

🥧 Medicine Category Distribution (Pie Chart)
📊 Spending Trends (Bar Chart)

🤖 AI Wellness Recommendations:
• Vitamin D levels may need attention
• Great job maintaining diabetes medication!
```

#### **Tab 6: Nearby Services**
```
🗺️ [Interactive Map View Placeholder]

📍 Health Services:
┌────────────────────────────────────────┐
│ 🏥 City General Hospital               │
│ 📍 123 Main Street, Downtown           │
│ 🚗 1.2 km away                         │
│ ☎️ +1-555-0100                         │
│ [🧭 Directions]  [📞 Call]            │
└────────────────────────────────────────┘
```

#### **Tab 7: Upload Prescription**
```
┌─────────────────────────────────────────┐
│        📄 Upload Your Prescription      │
│                                         │
│     Drag and drop or click to select   │
│                                         │
│        [📁 Choose File]                 │
│                                         │
│  Supported: JPG, PNG, PDF               │
└─────────────────────────────────────────┘

After upload:
✅ Prescription Uploaded Successfully!
AI extracted 3 medicines:
• Paracetamol 500mg ✓
• Amoxicillin 250mg ✓
• Cetirizine 10mg ✓
```

---

### 2️⃣ **Store Dashboard Interface** (`/store`)

Click "Store Dashboard" in navigation to access.

#### **Tab Navigation**
```
[Inventory] [Smart Billing] [Analytics] [AI Insights]
```

#### **Tab 1: Inventory**
```
[+ Add Medicine]

⚠️ Low Stock Alert! 2 items running low

┌──────────────────────────────────┐
│ 💊 Paracetamol 500mg             │
│ Pain Relief                      │
│ Price: ₹50                       │
│ Stock: 150 units                 │
│ Profit/unit: ₹15                 │
│ [✏️ Edit]  [🗑️ Delete]          │
└──────────────────────────────────┘
```

#### **Tab 2: Smart Billing**
```
Create New Bill                Current Bill
┌─────────────────┐            ┌─────────────────┐
│ Customer Name:  │            │ Paracetamol×2   │
│ [_____________] │            │ ₹100            │
│                 │            │ Cetirizine×1    │
│ Medicine:       │            │ ₹35             │
│ [Select...▼]    │            ├─────────────────┤
│                 │            │ Subtotal: ₹135  │
│ Quantity: [1]   │            │ Profit: ₹40.50  │
│                 │            │                 │
│ [+ Add to Bill] │            │ [📥 Generate &  │
│                 │            │  Download PDF]  │
└─────────────────┘            └─────────────────┘

Recent Bills:
Bill #BILL0001 | 20 Oct 2025 | ₹135 | Profit: ₹40.50
```

#### **Tab 3: Analytics**
```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ 💰₹30,600│ │ 📈₹9,180 │ │ 🛍️ 228   │ │ 📉 33    │
│ Revenue  │ │ Profit   │ │ Sales    │ │ Avg Daily│
└──────────┘ └──────────┘ └──────────┘ └──────────┘

📊 Daily Sales (Bar Chart)
📈 Monthly Revenue & Profit (Line Chart)
🥧 Top Selling Medicines (Pie Chart)
📉 Inventory Trends (Area Chart)
```

#### **Tab 4: AI Insights**
```
🤖 AI-Powered Insights

💡 Business Insights:
┌────────────────────────────────────────┐
│ 📈 Revenue Opportunity                 │
│ Pain relief category showing 25%      │
│ growth. Consider expanding inventory. │
└────────────────────────────────────────┘

📈 Weekly Sales Predictions:
┌──────────────────────────────────────────────────┐
│ Medicine        Trend  Predicted  Stock  Status  │
├──────────────────────────────────────────────────┤
│ Paracetamol     📈↑    120       150    ✅       │
│ Amoxicillin     📈↑    85        80     ⚠️       │
└──────────────────────────────────────────────────┘

💡 Smart Stock Recommendations:
🔴 HIGH PRIORITY: Amoxicillin - Restock Soon
🟡 MEDIUM: Paracetamol - Monitor
🟢 LOW: Vitamin D3 - Reduce Stock
```

---

## 🎨 **Visual Theme Features**

### **Light Mode** (Default)
- Clean white/blue background (#f4f6fd)
- Black text for readability
- Green gradient accents

### **Dark Mode** (Toggle 🌙)
- Deep black background (#121212)
- White text
- Same gradient accents
- Easy on the eyes

### **Gradient Design**
Every card/button uses the signature gradient:
```
Green (#43e97b) → Black (#000000)
```

### **Animations**
- **Hover**: Cards lift up with shadow glow
- **Buttons**: Scale and glow effect
- **Charts**: Smooth loading animations
- **Theme Toggle**: Smooth color transitions

---

## 🖱️ **Interactive Elements**

### **Try These Actions:**

1. **Search Medicine**: Type in search box → Cards filter instantly
2. **Add to Cart**: Click "Add to Cart" → Badge shows count
3. **View Cart**: Click Cart tab → See badge number (2)
4. **Toggle Theme**: Click 🌙/☀️ → Smooth transition
5. **Switch Dashboard**: Click "Store Dashboard" → Different interface
6. **Create Bill**: Store → Billing → Add items → Generate PDF
7. **View Charts**: Any Analytics tab → Interactive tooltips
8. **Add Reminder**: Reminders → Add → Fill form

---

## 📱 **Responsive Design**

The interface adapts to screen size:

**Desktop (> 768px)**
- Multi-column grid layouts
- Full navigation bar
- Large charts

**Tablet/Mobile (< 768px)**
- Single column layout
- Stacked navigation
- Touch-friendly buttons
- Smaller charts optimized for mobile

---

## 🎯 **Quick Navigation Map**

```
MediTatva
├── Patient Dashboard (/)
│   ├── Search Medicines (search & add to cart)
│   ├── Cart (checkout)
│   ├── History (past orders + charts)
│   ├── Reminders (medicine alerts)
│   ├── Insights (health analytics)
│   ├── Nearby Services (map + locations)
│   └── Upload Prescription (OCR)
│
└── Store Dashboard (/store)
    ├── Inventory (manage medicines)
    ├── Smart Billing (create bills + PDF)
    ├── Analytics (all charts)
    └── AI Insights (predictions)
```

---

## ✨ **Pro Tips**

1. **Cart Badge**: Shows number of items (appears as red circle)
2. **Low Stock**: Yellow alerts appear automatically
3. **PDF Bills**: Auto-download when generated
4. **AI Tips**: Refresh page to see different insights
5. **Charts**: Hover for exact values
6. **Mobile**: Swipe/scroll works smoothly

---

## 🚀 **Access Now**

**Open in your browser:**
```
http://localhost:5173
```

The interface is **live and interactive**! 

Start by:
1. Searching for medicines
2. Adding items to cart
3. Toggling the theme
4. Exploring both dashboards

---

**Enjoy exploring MediTatva! 🎉**
