// Medicine related types
export interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  manufacturer: string;
  description: string;
  dosage?: string;
  imageUrl?: string;
  substitutes?: string[];
}

// Cart related types
export interface CartItem {
  medicine: Medicine;
  quantity: number;
}

// Order related types
export interface Order {
  id: string;
  date: Date;
  items: CartItem[];
  total: number;
  status: 'completed' | 'pending' | 'cancelled';
}

// Reminder related types
export interface Reminder {
  id: string;
  medicineName: string;
  dosage: string;
  frequency: string;
  time: string[];
  startDate: Date;
  endDate?: Date;
  isSubscription: boolean;
}

// Store related types
export interface StoreInventory extends Medicine {
  lowStockThreshold: number;
  lastRestocked: Date;
  profit: number;
}

export interface Bill {
  id: string;
  date: Date;
  items: CartItem[];
  total: number;
  profit: number;
  customerName?: string;
}

// Analytics types
export interface SalesData {
  date: string;
  sales: number;
  revenue: number;
  profit: number;
}

export interface MedicineUsage {
  month: string;
  amount: number;
  spending: number;
}

export interface HealthService {
  id: string;
  name: string;
  type: 'clinic' | 'hospital' | 'pharmacy';
  address: string;
  distance: string;
  phone: string;
  lat: number;
  lng: number;
}

// Theme types
export type Theme = 'light' | 'dark';
