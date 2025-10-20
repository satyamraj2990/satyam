import type { Medicine, Order, Reminder, StoreInventory, SalesData, MedicineUsage, HealthService } from '../types';

// Mock medicines data
export const mockMedicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    category: 'Pain Relief',
    price: 50,
    stock: 150,
    manufacturer: 'HealthCo',
    description: 'Effective pain and fever relief',
    dosage: '1-2 tablets every 4-6 hours',
    substitutes: ['Acetaminophen', 'Tylenol']
  },
  {
    id: '2',
    name: 'Amoxicillin 250mg',
    category: 'Antibiotic',
    price: 120,
    stock: 80,
    manufacturer: 'MediPharm',
    description: 'Broad-spectrum antibiotic',
    dosage: '1 capsule 3 times daily',
    substitutes: ['Augmentin', 'Moxikind']
  },
  {
    id: '3',
    name: 'Cetirizine 10mg',
    category: 'Allergy',
    price: 35,
    stock: 200,
    manufacturer: 'AllerCare',
    description: 'Anti-allergic medication',
    dosage: '1 tablet once daily',
    substitutes: ['Zyrtec', 'Alerid']
  },
  {
    id: '4',
    name: 'Omeprazole 20mg',
    category: 'Digestive',
    price: 85,
    stock: 120,
    manufacturer: 'GastroMed',
    description: 'Reduces stomach acid',
    dosage: '1 capsule before meals',
    substitutes: ['Prilosec', 'Omez']
  },
  {
    id: '5',
    name: 'Metformin 500mg',
    category: 'Diabetes',
    price: 95,
    stock: 100,
    manufacturer: 'DiabCare',
    description: 'Blood sugar control',
    dosage: '1 tablet twice daily with meals',
    substitutes: ['Glucophage', 'Glycomet']
  },
  {
    id: '6',
    name: 'Amlodipine 5mg',
    category: 'Cardiovascular',
    price: 110,
    stock: 90,
    manufacturer: 'CardioHealth',
    description: 'Blood pressure management',
    dosage: '1 tablet once daily',
    substitutes: ['Norvasc', 'Amlong']
  },
  {
    id: '7',
    name: 'Vitamin D3 1000IU',
    category: 'Supplements',
    price: 250,
    stock: 180,
    manufacturer: 'VitaLife',
    description: 'Bone health supplement',
    dosage: '1 tablet daily',
    substitutes: ['Cholecalciferol', 'Sunny D']
  },
  {
    id: '8',
    name: 'Ibuprofen 400mg',
    category: 'Pain Relief',
    price: 65,
    stock: 140,
    manufacturer: 'PainAway',
    description: 'Anti-inflammatory pain relief',
    dosage: '1-2 tablets every 6-8 hours',
    substitutes: ['Advil', 'Brufen']
  }
];

// Mock orders history
export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    date: new Date('2025-10-15'),
    items: [
      { medicine: mockMedicines[0], quantity: 2 },
      { medicine: mockMedicines[2], quantity: 1 }
    ],
    total: 135,
    status: 'completed'
  },
  {
    id: 'ORD002',
    date: new Date('2025-09-28'),
    items: [
      { medicine: mockMedicines[4], quantity: 3 }
    ],
    total: 285,
    status: 'completed'
  },
  {
    id: 'ORD003',
    date: new Date('2025-09-10'),
    items: [
      { medicine: mockMedicines[1], quantity: 1 },
      { medicine: mockMedicines[3], quantity: 2 }
    ],
    total: 290,
    status: 'completed'
  }
];

// Mock reminders
export const mockReminders: Reminder[] = [
  {
    id: 'REM001',
    medicineName: 'Metformin 500mg',
    dosage: '1 tablet',
    frequency: 'Twice daily',
    time: ['08:00', '20:00'],
    startDate: new Date('2025-10-01'),
    isSubscription: true
  },
  {
    id: 'REM002',
    medicineName: 'Amlodipine 5mg',
    dosage: '1 tablet',
    frequency: 'Once daily',
    time: ['09:00'],
    startDate: new Date('2025-09-15'),
    isSubscription: false
  }
];

// Mock store inventory
export const mockStoreInventory: StoreInventory[] = mockMedicines.map((med, index) => ({
  ...med,
  lowStockThreshold: 50,
  lastRestocked: new Date(2025, 9, 15 - index),
  profit: med.price * 0.3 // 30% profit margin
}));

// Mock sales data
export const mockSalesData: SalesData[] = [
  { date: '2025-10-14', sales: 25, revenue: 3500, profit: 1050 },
  { date: '2025-10-15', sales: 32, revenue: 4200, profit: 1260 },
  { date: '2025-10-16', sales: 28, revenue: 3800, profit: 1140 },
  { date: '2025-10-17', sales: 35, revenue: 4500, profit: 1350 },
  { date: '2025-10-18', sales: 30, revenue: 4000, profit: 1200 },
  { date: '2025-10-19', sales: 40, revenue: 5200, profit: 1560 },
  { date: '2025-10-20', sales: 38, revenue: 4900, profit: 1470 }
];

// Mock medicine usage data
export const mockMedicineUsage: MedicineUsage[] = [
  { month: 'Apr', amount: 12, spending: 1200 },
  { month: 'May', amount: 15, spending: 1500 },
  { month: 'Jun', amount: 10, spending: 950 },
  { month: 'Jul', amount: 18, spending: 1800 },
  { month: 'Aug', amount: 14, spending: 1400 },
  { month: 'Sep', amount: 20, spending: 2100 },
  { month: 'Oct', amount: 16, spending: 1650 }
];

// Mock health services
export const mockHealthServices: HealthService[] = [
  {
    id: 'HS001',
    name: 'City General Hospital',
    type: 'hospital',
    address: '123 Main Street, Downtown',
    distance: '1.2 km',
    phone: '+1-555-0100',
    lat: 40.7128,
    lng: -74.0060
  },
  {
    id: 'HS002',
    name: 'MediCare Clinic',
    type: 'clinic',
    address: '456 Oak Avenue, Midtown',
    distance: '0.8 km',
    phone: '+1-555-0101',
    lat: 40.7589,
    lng: -73.9851
  },
  {
    id: 'HS003',
    name: 'HealthPlus Pharmacy',
    type: 'pharmacy',
    address: '789 Pine Road, Uptown',
    distance: '0.5 km',
    phone: '+1-555-0102',
    lat: 40.7614,
    lng: -73.9776
  },
  {
    id: 'HS004',
    name: 'Emergency Medical Center',
    type: 'hospital',
    address: '321 Elm Street, Westside',
    distance: '2.0 km',
    phone: '+1-555-0103',
    lat: 40.7489,
    lng: -73.9680
  }
];
