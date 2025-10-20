import React, { useState } from 'react';
import { Bell, Plus, Clock, Calendar, Repeat } from 'lucide-react';
import type { Reminder } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface RemindersProps {
  reminders: Reminder[];
  onAddReminder: (reminder: Omit<Reminder, 'id'>) => void;
}

export const Reminders: React.FC<RemindersProps> = ({ reminders, onAddReminder }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    medicineName: '',
    dosage: '',
    frequency: 'Once daily',
    time: ['09:00'],
    isSubscription: false
  });

  const handleSubmit = () => {
    onAddReminder({
      ...formData,
      startDate: new Date()
    });
    setShowAddModal(false);
    setFormData({
      medicineName: '',
      dosage: '',
      frequency: 'Once daily',
      time: ['09:00'],
      isSubscription: false
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Medicine Reminders</h2>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus size={16} />
          Add Reminder
        </Button>
      </div>

      <div className="grid grid-2">
        {reminders.map((reminder) => (
          <Card key={reminder.id} className="card-gradient">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h3 style={{ marginBottom: '10px' }}>{reminder.medicineName}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', opacity: 0.9 }}>
                  <Clock size={16} />
                  <span>{reminder.frequency}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', opacity: 0.9 }}>
                  <Bell size={16} />
                  <span>{reminder.time.join(', ')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
                  <Calendar size={16} />
                  <span>Since {new Date(reminder.startDate).toLocaleDateString()}</span>
                </div>
              </div>
              {reminder.isSubscription && (
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Repeat size={14} />
                  Subscription
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {reminders.length === 0 && (
        <Card style={{ textAlign: 'center', padding: '60px 20px' }}>
          <Bell size={64} color="var(--text-secondary)" style={{ margin: '0 auto 20px' }} />
          <h3>No reminders set</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
            Add reminders to never miss your medication
          </p>
        </Card>
      )}

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            <h2>Add Medicine Reminder</h2>

            <div style={{ marginTop: '20px' }}>
              <div className="form-group">
                <label className="form-label">Medicine Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.medicineName}
                  onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                  placeholder="Enter medicine name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Dosage</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.dosage}
                  onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                  placeholder="e.g., 1 tablet, 5ml"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Frequency</label>
                <select
                  className="form-select"
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                >
                  <option>Once daily</option>
                  <option>Twice daily</option>
                  <option>Three times daily</option>
                  <option>As needed</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Time(s)</label>
                <input
                  type="time"
                  className="form-input"
                  value={formData.time[0]}
                  onChange={(e) => setFormData({ ...formData, time: [e.target.value] })}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.isSubscription}
                    onChange={(e) => setFormData({ ...formData, isSubscription: e.target.checked })}
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>Enable auto-refill subscription</span>
                </label>
              </div>

              <Button onClick={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
                Add Reminder
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
