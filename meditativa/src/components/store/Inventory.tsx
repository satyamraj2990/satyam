import React, { useState } from 'react';
import { Plus, Edit, Trash2, AlertCircle, Package } from 'lucide-react';
import type { StoreInventory } from '../../types';
import { mockStoreInventory } from '../../data/mockData';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const Inventory: React.FC = () => {
  const [inventory, setInventory] = useState<StoreInventory[]>(mockStoreInventory);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<StoreInventory | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: 0,
    stock: 0,
    manufacturer: '',
    description: '',
    lowStockThreshold: 50
  });

  const handleSubmit = () => {
    if (editingItem) {
      setInventory(prev =>
        prev.map(item =>
          item.id === editingItem.id
            ? { ...item, ...formData, profit: formData.price * 0.3 }
            : item
        )
      );
    } else {
      const newItem: StoreInventory = {
        ...formData,
        id: String(inventory.length + 1),
        profit: formData.price * 0.3,
        lastRestocked: new Date()
      };
      setInventory(prev => [...prev, newItem]);
    }
    handleCloseModal();
  };

  const handleEdit = (item: StoreInventory) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      price: item.price,
      stock: item.stock,
      manufacturer: item.manufacturer,
      description: item.description,
      lowStockThreshold: item.lowStockThreshold
    });
    setShowAddModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this medicine?')) {
      setInventory(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setEditingItem(null);
    setFormData({
      name: '',
      category: '',
      price: 0,
      stock: 0,
      manufacturer: '',
      description: '',
      lowStockThreshold: 50
    });
  };

  const lowStockItems = inventory.filter(item => item.stock <= item.lowStockThreshold);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Inventory Management</h2>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus size={16} />
          Add Medicine
        </Button>
      </div>

      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && (
        <Card style={{ marginBottom: '20px', background: '#fff3cd', border: '1px solid #ffc107' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertCircle size={24} color="#856404" />
            <div>
              <strong style={{ color: '#856404' }}>Low Stock Alert!</strong>
              <p style={{ color: '#856404', marginTop: '5px', fontSize: '14px' }}>
                {lowStockItems.length} item(s) are running low on stock
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Inventory Grid */}
      <div className="grid grid-3">
        {inventory.map((item) => (
          <Card key={item.id}>
            <div style={{ marginBottom: '15px' }}>
              <span className="medicine-category">{item.category}</span>
              <h3 style={{ margin: '10px 0' }}>{item.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                {item.manufacturer}
              </p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Price:</span>
                <strong style={{ color: 'var(--gradient-start)' }}>₹{item.price}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Stock:</span>
                <strong style={{ color: item.stock <= item.lowStockThreshold ? '#ff6b6b' : 'var(--text-primary)' }}>
                  {item.stock} units
                </strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Profit/unit:</span>
                <strong>₹{item.profit.toFixed(2)}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <Button onClick={() => handleEdit(item)} variant="secondary" style={{ flex: 1 }}>
                <Edit size={14} />
                Edit
              </Button>
              <Button onClick={() => handleDelete(item.id)} variant="danger" style={{ flex: 1 }}>
                <Trash2 size={14} />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2>{editingItem ? 'Edit Medicine' : 'Add New Medicine'}</h2>

            <div style={{ marginTop: '20px' }}>
              <div className="form-group">
                <label className="form-label">Medicine Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select category</option>
                  <option>Pain Relief</option>
                  <option>Antibiotic</option>
                  <option>Allergy</option>
                  <option>Digestive</option>
                  <option>Diabetes</option>
                  <option>Cardiovascular</option>
                  <option>Supplements</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Manufacturer</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.manufacturer}
                  onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">Price (₹)</label>
                  <input
                    type="number"
                    className="form-input"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-input"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Low Stock Threshold</label>
                <input
                  type="number"
                  className="form-input"
                  value={formData.lowStockThreshold}
                  onChange={(e) => setFormData({ ...formData, lowStockThreshold: Number(e.target.value) })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <Button onClick={handleSubmit} style={{ flex: 1 }}>
                  <Package size={16} />
                  {editingItem ? 'Update' : 'Add'} Medicine
                </Button>
                <Button variant="secondary" onClick={handleCloseModal} style={{ flex: 1 }}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
