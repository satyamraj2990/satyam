import React, { useState } from 'react';
import { ShoppingCart, Package, Bell, TrendingUp, MapPin, Upload } from 'lucide-react';
import type { CartItem, Order, Reminder } from '../../types';
import { mockOrders, mockReminders } from '../../data/mockData';
import { MedicineSearch } from './MedicineSearch';
import { Cart } from './Cart';
import { PurchaseHistory } from './PurchaseHistory';
import { Reminders } from './Reminders';
import { HealthInsights } from './HealthInsights';
import { NearbyServices } from './NearbyServices';
import { PrescriptionUpload } from './PrescriptionUpload';

type TabType = 'search' | 'cart' | 'history' | 'reminders' | 'insights' | 'services' | 'prescription';

export const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('search');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [reminders, setReminders] = useState<Reminder[]>(mockReminders);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.medicine.id === newItem.medicine.id);
      if (existing) {
        return prev.map(item =>
          item.medicine.id === newItem.medicine.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
    showNotification('Added to cart successfully!');
  };

  const handleUpdateQuantity = (medicineId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.medicine.id !== medicineId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.medicine.id === medicineId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (medicineId: string) => {
    setCartItems(prev => prev.filter(item => item.medicine.id !== medicineId));
    showNotification('Item removed from cart');
  };

  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.medicine.price * item.quantity), 0);
    const newOrder: Order = {
      id: `ORD${String(orders.length + 1).padStart(3, '0')}`,
      date: new Date(),
      items: cartItems,
      total,
      status: 'completed'
    };
    setOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
    setActiveTab('history');
    showNotification('Order placed successfully!');
  };

  const handleAddReminder = (reminder: Omit<Reminder, 'id'>) => {
    const newReminder: Reminder = {
      ...reminder,
      id: `REM${String(reminders.length + 1).padStart(3, '0')}`
    };
    setReminders(prev => [...prev, newReminder]);
    showNotification('Reminder added successfully!');
  };

  const tabs = [
    { id: 'search' as TabType, label: 'Search Medicines', icon: ShoppingCart },
    { id: 'cart' as TabType, label: 'Cart', icon: ShoppingCart, badge: cartItems.length },
    { id: 'history' as TabType, label: 'History', icon: Package },
    { id: 'reminders' as TabType, label: 'Reminders', icon: Bell },
    { id: 'insights' as TabType, label: 'Insights', icon: TrendingUp },
    { id: 'services' as TabType, label: 'Nearby Services', icon: MapPin },
    { id: 'prescription' as TabType, label: 'Upload Prescription', icon: Upload }
  ];

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Patient Dashboard</h1>
        <p className="dashboard-subtitle">Manage your medicines and health</p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        flexWrap: 'wrap',
        borderBottom: '2px solid var(--border-color)',
        paddingBottom: '10px'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 24px',
              borderRadius: '12px 12px 0 0',
              border: 'none',
              background: activeTab === tab.id
                ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                : 'var(--bg-secondary)',
              color: activeTab === tab.id ? 'white' : 'var(--text-primary)',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'var(--transition)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative'
            }}
          >
            <tab.icon size={18} />
            {tab.label}
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className="cart-badge">{tab.badge}</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'search' && <MedicineSearch onAddToCart={handleAddToCart} />}
        {activeTab === 'cart' && (
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
          />
        )}
        {activeTab === 'history' && <PurchaseHistory orders={orders} />}
        {activeTab === 'reminders' && (
          <Reminders reminders={reminders} onAddReminder={handleAddReminder} />
        )}
        {activeTab === 'insights' && <HealthInsights />}
        {activeTab === 'services' && <NearbyServices />}
        {activeTab === 'prescription' && <PrescriptionUpload onAddToCart={handleAddToCart} />}
      </div>

      {/* Notification */}
      {notification && (
        <div className="notification notification-success">
          {notification}
        </div>
      )}
    </div>
  );
};
