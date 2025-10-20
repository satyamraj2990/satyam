import React from 'react';
import { Sparkles, TrendingUp, Package, AlertTriangle, Lightbulb } from 'lucide-react';
import { Card } from '../common/Card';

export const AISuggestions: React.FC = () => {
  const predictions = [
    { name: 'Paracetamol 500mg', trend: 'up', predictedSales: 120, currentStock: 150 },
    { name: 'Amoxicillin 250mg', trend: 'up', predictedSales: 85, currentStock: 80 },
    { name: 'Cetirizine 10mg', trend: 'stable', predictedSales: 65, currentStock: 200 },
    { name: 'Metformin 500mg', trend: 'up', predictedSales: 95, currentStock: 100 },
    { name: 'Vitamin D3 1000IU', trend: 'down', predictedSales: 45, currentStock: 180 }
  ];

  const stockRecommendations = [
    {
      medicine: 'Amoxicillin 250mg',
      action: 'Restock Soon',
      reason: 'High demand predicted, current stock may run out in 3 days',
      priority: 'high'
    },
    {
      medicine: 'Paracetamol 500mg',
      action: 'Monitor',
      reason: 'Steady demand, stock levels adequate for next 5 days',
      priority: 'medium'
    },
    {
      medicine: 'Vitamin D3 1000IU',
      action: 'Reduce Stock',
      reason: 'Decreasing demand trend, consider reducing next order',
      priority: 'low'
    }
  ];

  const businessInsights = [
    {
      icon: TrendingUp,
      title: 'Revenue Opportunity',
      description: 'Pain relief category showing 25% growth. Consider expanding inventory.',
      color: '#43e97b'
    },
    {
      icon: Package,
      title: 'Stock Optimization',
      description: '3 items have excess stock. Consider promotional pricing.',
      color: '#38f9d7'
    },
    {
      icon: AlertTriangle,
      title: 'Supply Alert',
      description: '2 fast-moving items need restocking within 72 hours.',
      color: '#ffc107'
    },
    {
      icon: Lightbulb,
      title: 'Smart Suggestion',
      description: 'Bundle diabetes medication with supplements for better margins.',
      color: '#4facfe'
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <Sparkles size={28} color="var(--gradient-start)" />
        <h2>AI-Powered Insights</h2>
      </div>

      {/* Business Insights */}
      <div className="grid grid-2" style={{ marginBottom: '40px' }}>
        {businessInsights.map((insight, index) => (
          <Card key={index} style={{ borderLeft: `4px solid ${insight.color}` }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: `${insight.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <insight.icon size={24} color={insight.color} />
              </div>
              <div>
                <h4 style={{ marginBottom: '8px' }}>{insight.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  {insight.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Predictions */}
      <h3 style={{ marginBottom: '20px' }}>📈 Weekly Sales Predictions</h3>
      <Card style={{ marginBottom: '40px' }}>
        <div className="table-container" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Trend</th>
                <th>Predicted Sales</th>
                <th>Current Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.name}</strong></td>
                  <td>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: item.trend === 'up' ? '#43e97b' : item.trend === 'down' ? '#ff6b6b' : 'var(--text-secondary)'
                    }}>
                      {item.trend === 'up' && '📈'}
                      {item.trend === 'down' && '📉'}
                      {item.trend === 'stable' && '➡️'}
                      {item.trend.charAt(0).toUpperCase() + item.trend.slice(1)}
                    </span>
                  </td>
                  <td>{item.predictedSales} units</td>
                  <td>{item.currentStock} units</td>
                  <td>
                    {item.currentStock < item.predictedSales ? (
                      <span className="badge badge-danger">Restock Needed</span>
                    ) : item.currentStock < item.predictedSales * 1.5 ? (
                      <span className="badge badge-warning">Monitor</span>
                    ) : (
                      <span className="badge badge-success">Adequate</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Stock Recommendations */}
      <h3 style={{ marginBottom: '20px' }}>💡 Smart Stock Recommendations</h3>
      <div className="grid grid-3">
        {stockRecommendations.map((rec, index) => (
          <Card
            key={index}
            style={{
              borderLeft: `4px solid ${
                rec.priority === 'high' ? '#ff6b6b' :
                rec.priority === 'medium' ? '#ffc107' :
                '#43e97b'
              }`
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <h4>{rec.medicine}</h4>
              <span
                className={`badge badge-${
                  rec.priority === 'high' ? 'danger' :
                  rec.priority === 'medium' ? 'warning' :
                  'success'
                }`}
                style={{ marginTop: '8px' }}
              >
                {rec.priority.toUpperCase()} PRIORITY
              </span>
            </div>
            <div
              style={{
                background: 'var(--bg-primary)',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '10px'
              }}
            >
              <strong style={{ color: 'var(--gradient-start)' }}>{rec.action}</strong>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
              {rec.reason}
            </p>
          </Card>
        ))}
      </div>

      {/* AI Learning Note */}
      <Card style={{ marginTop: '30px', background: 'linear-gradient(135deg, #43e97b, #38f9d7)', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Sparkles size={32} />
          <div>
            <h3 style={{ marginBottom: '8px' }}>AI Continuously Learning</h3>
            <p style={{ opacity: 0.95, lineHeight: '1.6' }}>
              Our AI analyzes your sales patterns, seasonal trends, and market data to provide increasingly
              accurate predictions and recommendations. The more you use MediTatva, the smarter it gets!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
