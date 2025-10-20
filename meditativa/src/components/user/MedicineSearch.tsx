import React, { useState } from 'react';
import { Search, ShoppingCart, AlertCircle } from 'lucide-react';
import type { Medicine, CartItem } from '../../types';
import { mockMedicines } from '../../data/mockData';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface MedicineSearchProps {
  onAddToCart: (item: CartItem) => void;
}

export const MedicineSearch: React.FC<MedicineSearchProps> = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const filteredMedicines = mockMedicines.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (medicine: Medicine, quantity: number = 1) => {
    onAddToCart({ medicine, quantity });
    setSelectedMedicine(null);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search medicines by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="search-icon" size={20} />
      </div>

      <div className="grid grid-3">
        {filteredMedicines.map((medicine) => (
          <Card
            key={medicine.id}
            className="medicine-card"
            onClick={() => setSelectedMedicine(medicine)}
          >
            <span className="medicine-category">{medicine.category}</span>
            <h3>{medicine.name}</h3>
            <p className="medicine-stock">
              {medicine.stock > 0 ? `In Stock: ${medicine.stock}` : 'Out of Stock'}
            </p>
            <div className="medicine-price">₹{medicine.price}</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '10px' }}>
              {medicine.description}
            </p>
            <Button
              onClick={() => {
                handleAddToCart(medicine);
              }}
              style={{ marginTop: '15px', width: '100%' }}
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>

      {selectedMedicine && (
        <div className="modal-overlay" onClick={() => setSelectedMedicine(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMedicine(null)}>×</button>
            <h2>{selectedMedicine.name}</h2>
            <span className="medicine-category">{selectedMedicine.category}</span>
            
            <div style={{ marginTop: '20px' }}>
              <p><strong>Manufacturer:</strong> {selectedMedicine.manufacturer}</p>
              <p><strong>Price:</strong> ₹{selectedMedicine.price}</p>
              <p><strong>Stock:</strong> {selectedMedicine.stock} units</p>
              {selectedMedicine.dosage && (
                <p><strong>Dosage:</strong> {selectedMedicine.dosage}</p>
              )}
              <p style={{ marginTop: '15px' }}>{selectedMedicine.description}</p>
            </div>

            {selectedMedicine.stock === 0 && selectedMedicine.substitutes && (
              <div style={{ marginTop: '20px', padding: '15px', background: 'var(--bg-primary)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <AlertCircle size={20} color="var(--gradient-start)" />
                  <strong>AI-Powered Substitutes Available:</strong>
                </div>
                <ul style={{ marginLeft: '20px' }}>
                  {selectedMedicine.substitutes.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <Button onClick={() => handleAddToCart(selectedMedicine)} style={{ flex: 1 }}>
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
              <Button variant="secondary" onClick={() => setSelectedMedicine(null)} style={{ flex: 1 }}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
