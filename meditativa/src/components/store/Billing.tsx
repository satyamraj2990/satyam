import React, { useState } from 'react';
import { Plus, Minus, Trash2, FileText, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import QRCodeLib from 'qrcode';
import type { CartItem, Bill } from '../../types';
import { mockStoreInventory } from '../../data/mockData';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const Billing: React.FC = () => {
  const [billItems, setBillItems] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [bills, setBills] = useState<Bill[]>([]);

  const handleAddItem = () => {
    if (!selectedMedicine) return;
    
    const medicine = mockStoreInventory.find(m => m.id === selectedMedicine);
    if (!medicine) return;

    const existing = billItems.find(item => item.medicine.id === medicine.id);
    if (existing) {
      setBillItems(prev =>
        prev.map(item =>
          item.medicine.id === medicine.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setBillItems(prev => [...prev, { medicine, quantity }]);
    }
    setSelectedMedicine('');
    setQuantity(1);
  };

  const handleUpdateQuantity = (medicineId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setBillItems(prev => prev.filter(item => item.medicine.id !== medicineId));
    } else {
      setBillItems(prev =>
        prev.map(item =>
          item.medicine.id === medicineId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (medicineId: string) => {
    setBillItems(prev => prev.filter(item => item.medicine.id !== medicineId));
  };

  const total = billItems.reduce((sum, item) => sum + (item.medicine.price * item.quantity), 0);
  const totalProfit = billItems.reduce((sum, item) => sum + ((item.medicine.price * 0.3) * item.quantity), 0);

  const handleGenerateBill = async () => {
    const newBill: Bill = {
      id: `BILL${String(bills.length + 1).padStart(4, '0')}`,
      date: new Date(),
      items: billItems,
      total,
      profit: totalProfit,
      customerName: customerName || 'Walk-in Customer'
    };

    setBills(prev => [newBill, ...prev]);
    
    // Generate PDF
    const pdf = new jsPDF();
    
    // Header
    pdf.setFontSize(20);
    pdf.setTextColor(67, 233, 123);
    pdf.text('MediTatva Pharmacy', 105, 20, { align: 'center' });
    
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Bill ID: ${newBill.id}`, 20, 40);
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, 48);
    pdf.text(`Customer: ${newBill.customerName}`, 20, 56);
    
    // Items
    let y = 70;
    pdf.setFontSize(14);
    pdf.text('Items:', 20, y);
    y += 10;
    
    pdf.setFontSize(10);
    billItems.forEach((item) => {
      pdf.text(`${item.medicine.name} x ${item.quantity}`, 20, y);
      pdf.text(`₹${item.medicine.price * item.quantity}`, 170, y, { align: 'right' });
      y += 8;
    });
    
    y += 10;
    pdf.line(20, y, 190, y);
    y += 10;
    
    pdf.setFontSize(12);
    pdf.text(`Total: ₹${total}`, 170, y, { align: 'right' });
    
    // Generate QR Code
    const qrData = `BILL:${newBill.id}|TOTAL:${total}|DATE:${new Date().toISOString()}`;
    const qrCodeDataUrl = await QRCodeLib.toDataURL(qrData);
    pdf.addImage(qrCodeDataUrl, 'PNG', 80, y + 20, 50, 50);
    
    pdf.save(`bill_${newBill.id}.pdf`);
    
    // Reset form
    setBillItems([]);
    setCustomerName('');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Smart Billing</h2>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        {/* Create Bill */}
        <Card>
          <h3 style={{ marginBottom: '20px' }}>Create New Bill</h3>

          <div className="form-group">
            <label className="form-label">Customer Name (Optional)</label>
            <input
              type="text"
              className="form-input"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Select Medicine</label>
            <select
              className="form-select"
              value={selectedMedicine}
              onChange={(e) => setSelectedMedicine(e.target.value)}
            >
              <option value="">Choose medicine...</option>
              {mockStoreInventory.map((med) => (
                <option key={med.id} value={med.id}>
                  {med.name} - ₹{med.price} (Stock: {med.stock})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-input"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>

          <Button onClick={handleAddItem} style={{ width: '100%' }}>
            <Plus size={16} />
            Add to Bill
          </Button>
        </Card>

        {/* Current Bill */}
        <Card>
          <h3 style={{ marginBottom: '20px' }}>Current Bill</h3>

          {billItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-secondary)' }}>
              <FileText size={48} style={{ margin: '0 auto 15px' }} />
              <p>No items added yet</p>
            </div>
          ) : (
            <>
              {billItems.map((item) => (
                <div
                  key={item.medicine.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    borderBottom: '1px solid var(--border-color)',
                    marginBottom: '10px'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <strong>{item.medicine.name}</strong>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                      ₹{item.medicine.price} each
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => handleUpdateQuantity(item.medicine.id, item.quantity - 1)}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ minWidth: '25px', textAlign: 'center', fontWeight: '600' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleUpdateQuantity(item.medicine.id, item.quantity + 1)}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div style={{ minWidth: '70px', textAlign: 'right', fontWeight: '600' }}>
                    ₹{item.medicine.price * item.quantity}
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.medicine.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff6b6b',
                      cursor: 'pointer',
                      padding: '8px',
                      marginLeft: '10px'
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'var(--bg-primary)',
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Subtotal:</span>
                  <strong>₹{total}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{ color: 'var(--gradient-start)' }}>Profit:</span>
                  <strong style={{ color: 'var(--gradient-start)' }}>₹{totalProfit.toFixed(2)}</strong>
                </div>
                <Button onClick={handleGenerateBill} style={{ width: '100%' }}>
                  <Download size={16} />
                  Generate Bill & Download PDF
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>

      {/* Recent Bills */}
      <h3 style={{ marginBottom: '20px' }}>Recent Bills</h3>
      <div className="grid grid-3">
        {bills.map((bill) => (
          <Card key={bill.id}>
            <div style={{ marginBottom: '15px' }}>
              <h4>Bill #{bill.id}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                {new Date(bill.date).toLocaleString()}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Customer: {bill.customerName}
              </p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>Total:</span>
                <strong style={{ color: 'var(--gradient-start)' }}>₹{bill.total}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Profit:</span>
                <strong>₹{bill.profit.toFixed(2)}</strong>
              </div>
            </div>

            <span className="badge badge-success">Completed</span>
          </Card>
        ))}
      </div>

      {bills.length === 0 && (
        <Card style={{ textAlign: 'center', padding: '40px 20px' }}>
          <FileText size={48} color="var(--text-secondary)" style={{ margin: '0 auto 15px' }} />
          <p style={{ color: 'var(--text-secondary)' }}>No bills generated yet</p>
        </Card>
      )}
    </div>
  );
};
