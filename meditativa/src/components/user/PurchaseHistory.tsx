import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package } from 'lucide-react';
import type { Order } from '../../types';
import { mockMedicineUsage } from '../../data/mockData';
import { Card } from '../common/Card';

interface PurchaseHistoryProps {
  orders: Order[];
}

export const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({ orders }) => {
  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Purchase History</h2>
      
      {/* Orders List */}
      <div style={{ marginBottom: '40px' }}>
        {orders.length === 0 ? (
          <Card style={{ textAlign: 'center', padding: '60px 20px' }}>
            <Package size={64} color="var(--text-secondary)" style={{ margin: '0 auto 20px' }} />
            <h3>No orders yet</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
              Your order history will appear here
            </p>
          </Card>
        ) : (
          orders.map((order) => (
            <Card key={order.id} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div>
                  <h4>Order #{order.id}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '20px', fontWeight: '600', color: 'var(--gradient-start)' }}>
                    ₹{order.total}
                  </div>
                  <span className={`badge badge-${order.status === 'completed' ? 'success' : 'warning'}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                {order.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{item.medicine.name} × {item.quantity}</span>
                    <span>₹{item.medicine.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-2">
        <Card>
          <h3 className="chart-title">Monthly Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockMedicineUsage}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#43e97b" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#38f9d7" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="month" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip
                contentStyle={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="spending" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="chart-title">Medicine Usage Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockMedicineUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="month" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip
                contentStyle={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#43e97b"
                strokeWidth={3}
                dot={{ fill: '#43e97b', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};
