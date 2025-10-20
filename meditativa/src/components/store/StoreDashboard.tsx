import React, { useState } from 'react';
import { Package, Receipt, BarChart3, Sparkles } from 'lucide-react';
import { Inventory } from './Inventory';
import { Billing } from './Billing';
import { Analytics } from './Analytics';
import { AISuggestions } from './AISuggestions';

type TabType = 'inventory' | 'billing' | 'analytics' | 'ai';

export const StoreDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('inventory');

  const tabs = [
    { id: 'inventory' as TabType, label: 'Inventory', icon: Package },
    { id: 'billing' as TabType, label: 'Smart Billing', icon: Receipt },
    { id: 'analytics' as TabType, label: 'Analytics', icon: BarChart3 },
    { id: 'ai' as TabType, label: 'AI Insights', icon: Sparkles }
  ];

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Store Dashboard</h1>
        <p className="dashboard-subtitle">Manage your pharmacy efficiently</p>
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
              gap: '8px'
            }}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'inventory' && <Inventory />}
        {activeTab === 'billing' && <Billing />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'ai' && <AISuggestions />}
      </div>
    </div>
  );
};
