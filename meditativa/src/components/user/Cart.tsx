import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import type { CartItem } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (medicineId: string, quantity: number) => void;
  onRemoveItem: (medicineId: string) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const total = items.reduce((sum, item) => sum + (item.medicine.price * item.quantity), 0);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handlePayment = () => {
    onCheckout();
    setShowCheckout(false);
  };

  if (items.length === 0) {
    return (
      <Card style={{ textAlign: 'center', padding: '60px 20px' }}>
        <ShoppingCart size={64} color="var(--text-secondary)" style={{ margin: '0 auto 20px' }} />
        <h3>Your cart is empty</h3>
        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
          Add medicines to get started!
        </p>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <h2 style={{ marginBottom: '20px' }}>Shopping Cart</h2>
        
        {items.map((item) => (
          <div
            key={item.medicine.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px',
              borderBottom: '1px solid var(--border-color)',
              marginBottom: '10px'
            }}
          >
            <div style={{ flex: 1 }}>
              <h4>{item.medicine.name}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                ₹{item.medicine.price} each
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => onUpdateQuantity(item.medicine.id, item.quantity - 1)}
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Minus size={16} />
                </button>
                <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: '600' }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.medicine.id, item.quantity + 1)}
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <div style={{ minWidth: '80px', textAlign: 'right', fontWeight: '600' }}>
                ₹{item.medicine.price * item.quantity}
              </div>
              
              <button
                onClick={() => onRemoveItem(item.medicine.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ff6b6b',
                  cursor: 'pointer',
                  padding: '8px'
                }}
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3>Total:</h3>
            <h3 style={{ color: 'var(--gradient-start)' }}>₹{total}</h3>
          </div>
          <Button onClick={handleCheckout} style={{ width: '100%' }}>
            <CreditCard size={16} />
            Proceed to Checkout
          </Button>
        </div>
      </Card>

      {showCheckout && (
        <div className="modal-overlay" onClick={() => setShowCheckout(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCheckout(false)}>×</button>
            <h2>Checkout</h2>
            
            <div style={{ marginTop: '20px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Enter your name" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Delivery Address</label>
                <textarea className="form-textarea" placeholder="Enter delivery address" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="Enter phone number" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Payment Method</label>
                <select className="form-select">
                  <option>Cash on Delivery</option>
                  <option>Credit/Debit Card</option>
                  <option>UPI</option>
                  <option>Net Banking</option>
                </select>
              </div>

              <div style={{
                background: 'var(--bg-primary)',
                padding: '15px',
                borderRadius: '12px',
                marginTop: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Subtotal:</span>
                  <span>₹{total}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Delivery:</span>
                  <span>₹40</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '10px',
                  borderTop: '1px solid var(--border-color)',
                  fontWeight: '600',
                  fontSize: '18px'
                }}>
                  <span>Total:</span>
                  <span style={{ color: 'var(--gradient-start)' }}>₹{total + 40}</span>
                </div>
              </div>

              <Button onClick={handlePayment} style={{ width: '100%', marginTop: '20px' }}>
                <CreditCard size={16} />
                Complete Payment
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
