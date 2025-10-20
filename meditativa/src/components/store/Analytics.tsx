import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { TrendingUp, DollarSign, ShoppingBag, TrendingDown } from 'lucide-react';
import { mockSalesData } from '../../data/mockData';
import { Card } from '../common/Card';

const monthlyData = [
  { month: 'Apr', revenue: 45000, profit: 13500 },
  { month: 'May', revenue: 52000, profit: 15600 },
  { month: 'Jun', revenue: 48000, profit: 14400 },
  { month: 'Jul', revenue: 61000, profit: 18300 },
  { month: 'Aug', revenue: 55000, profit: 16500 },
  { month: 'Sep', revenue: 68000, profit: 20400 },
  { month: 'Oct', revenue: 58000, profit: 17400 }
];

const topMedicines = [
  { name: 'Paracetamol', sales: 450, value: 30 },
  { name: 'Amoxicillin', sales: 320, value: 22 },
  { name: 'Cetirizine', sales: 280, value: 18 },
  { name: 'Metformin', sales: 250, value: 16 },
  { name: 'Others', sales: 200, value: 14 }
];

const COLORS = ['#43e97b', '#38f9d7', '#4facfe', '#00f2fe', '#a8edea'];

const inventoryTrend = [
  { date: '15 Oct', stock: 1200 },
  { date: '16 Oct', stock: 1150 },
  { date: '17 Oct', stock: 1100 },
  { date: '18 Oct', stock: 1250 },
  { date: '19 Oct', stock: 1180 },
  { date: '20 Oct', stock: 1140 }
];

export const Analytics: React.FC = () => {
  const totalRevenue = mockSalesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalProfit = mockSalesData.reduce((sum, item) => sum + item.profit, 0);
  const totalSales = mockSalesData.reduce((sum, item) => sum + item.sales, 0);
  const avgDailySales = Math.round(totalSales / mockSalesData.length);

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Analytics Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-4" style={{ marginBottom: '40px' }}>
        <Card className="stats-card card-gradient">
          <DollarSign size={32} />
          <div className="stats-value" style={{ color: 'white' }}>₹{totalRevenue}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Revenue (7 days)</div>
        </Card>

        <Card className="stats-card card-gradient">
          <TrendingUp size={32} />
          <div className="stats-value" style={{ color: 'white' }}>₹{totalProfit}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Profit (7 days)</div>
        </Card>

        <Card className="stats-card card-gradient">
          <ShoppingBag size={32} />
          <div className="stats-value" style={{ color: 'white' }}>{totalSales}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Sales (7 days)</div>
        </Card>

        <Card className="stats-card card-gradient">
          <TrendingDown size={32} />
          <div className="stats-value" style={{ color: 'white' }}>{avgDailySales}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Avg Daily Sales</div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-2">
        {/* Daily Sales Bar Chart */}
        <Card>
          <h3 className="chart-title">Daily Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockSalesData}>
              <defs>
                <linearGradient id="dailySalesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#43e97b" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#38f9d7" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip
                contentStyle={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="sales" fill="url(#dailySalesGradient)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Monthly Revenue & Profit Line Chart */}
        <Card>
          <h3 className="chart-title">Monthly Revenue & Profit Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
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
                dataKey="revenue"
                stroke="#43e97b"
                strokeWidth={3}
                dot={{ fill: '#43e97b', r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#38f9d7"
                strokeWidth={3}
                dot={{ fill: '#38f9d7', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Selling Medicines Pie Chart */}
        <Card>
          <h3 className="chart-title">Top Selling Medicines</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topMedicines}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {topMedicines.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

        {/* Inventory Trend Area Chart */}
        <Card>
          <h3 className="chart-title">Inventory Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={inventoryTrend}>
              <defs>
                <linearGradient id="inventoryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#43e97b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#43e97b" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip
                contentStyle={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="stock"
                stroke="#43e97b"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#inventoryGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};
