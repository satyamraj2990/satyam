import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Heart, Activity } from 'lucide-react';
import { Card } from '../common/Card';

const categoryData = [
  { name: 'Pain Relief', value: 30, color: '#43e97b' },
  { name: 'Antibiotics', value: 20, color: '#38f9d7' },
  { name: 'Vitamins', value: 25, color: '#4facfe' },
  { name: 'Digestive', value: 15, color: '#00f2fe' },
  { name: 'Others', value: 10, color: '#a8edea' }
];

const spendingTrend = [
  { month: 'Apr', spending: 1200 },
  { month: 'May', spending: 1500 },
  { month: 'Jun', spending: 950 },
  { month: 'Jul', spending: 1800 },
  { month: 'Aug', spending: 1400 },
  { month: 'Sep', spending: 2100 },
  { month: 'Oct', spending: 1650 }
];

export const HealthInsights: React.FC = () => {
  const totalSpending = spendingTrend.reduce((sum, item) => sum + item.spending, 0);
  const avgMonthly = Math.round(totalSpending / spendingTrend.length);

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Health Insights</h2>

      {/* Stats Cards */}
      <div className="grid grid-3" style={{ marginBottom: '40px' }}>
        <Card className="stats-card card-gradient">
          <TrendingUp size={32} />
          <div className="stats-value" style={{ color: 'white' }}>₹{totalSpending}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Spending</div>
        </Card>

        <Card className="stats-card card-gradient">
          <Heart size={32} />
          <div className="stats-value" style={{ color: 'white' }}>₹{avgMonthly}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Monthly Average</div>
        </Card>

        <Card className="stats-card card-gradient">
          <Activity size={32} />
          <div className="stats-value" style={{ color: 'white' }}>24</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Medicines Taken</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-2">
        <Card>
          <h3 className="chart-title">Medicine Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry: any) => `${entry.name} ${((entry.value / categoryData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="chart-title">Spending Trend Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spendingTrend}>
              <defs>
                <linearGradient id="spendingGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#43e97b" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#000000" stopOpacity={0.8} />
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
              <Bar dataKey="spending" fill="url(#spendingGradient)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* AI Wellness Tips */}
      <Card style={{ marginTop: '30px', background: 'linear-gradient(135deg, #43e97b, #38f9d7)', color: 'white' }}>
        <h3 style={{ marginBottom: '15px' }}>🤖 AI Wellness Recommendations</h3>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Your Vitamin D levels may need attention - consider supplements</li>
          <li>Regular pain relief usage detected - consult a doctor for chronic pain management</li>
          <li>Great job maintaining your diabetes medication schedule!</li>
          <li>Stay hydrated and maintain regular exercise for better health outcomes</li>
        </ul>
      </Card>
    </div>
  );
};
