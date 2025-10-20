import React, { useState } from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import type { CartItem } from '../../types';
import { mockMedicines } from '../../data/mockData';

interface PrescriptionUploadProps {
  onAddToCart: (item: CartItem) => void;
}

export const PrescriptionUpload: React.FC<PrescriptionUploadProps> = ({ onAddToCart }) => {
  const [uploaded, setUploaded] = useState(false);
  const [extractedMedicines, setExtractedMedicines] = useState<string[]>([]);

  const handleFileUpload = () => {
    // Simulate OCR extraction
    setTimeout(() => {
      const extracted = ['Paracetamol 500mg', 'Amoxicillin 250mg', 'Cetirizine 10mg'];
      setExtractedMedicines(extracted);
      setUploaded(true);
    }, 1500);
  };

  const handleAddAllToCart = () => {
    extractedMedicines.forEach(medName => {
      const medicine = mockMedicines.find(m => m.name === medName);
      if (medicine) {
        onAddToCart({ medicine, quantity: 1 });
      }
    });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Upload Prescription</h2>

      {!uploaded ? (
        <Card style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div
            style={{
              border: '2px dashed var(--gradient-start)',
              borderRadius: '20px',
              padding: '60px 40px',
              background: 'var(--bg-primary)',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleFileUpload}
          >
            <Upload size={64} color="var(--gradient-start)" style={{ margin: '0 auto 20px' }} />
            <h3>Upload Your Prescription</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '10px', marginBottom: '20px' }}>
              Drag and drop or click to select file
            </p>
            <Button>
              <FileText size={16} />
              Choose File
            </Button>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '20px' }}>
              Supported formats: JPG, PNG, PDF
            </p>
          </div>
        </Card>
      ) : (
        <>
          <Card className="card-gradient" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <CheckCircle size={48} />
              <div>
                <h3>Prescription Uploaded Successfully!</h3>
                <p style={{ opacity: 0.9, marginTop: '5px' }}>
                  AI has extracted {extractedMedicines.length} medicines from your prescription
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 style={{ marginBottom: '20px' }}>Extracted Medicines</h3>
            {extractedMedicines.map((medicine, index) => (
              <div
                key={index}
                style={{
                  padding: '15px',
                  background: 'var(--bg-primary)',
                  borderRadius: '12px',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={20} color="var(--gradient-start)" />
                  <span style={{ fontWeight: '500' }}>{medicine}</span>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Qty: 1
                </span>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <Button onClick={handleAddAllToCart} style={{ flex: 1 }}>
                Add All to Cart
              </Button>
              <Button variant="secondary" onClick={() => setUploaded(false)} style={{ flex: 1 }}>
                Upload Another
              </Button>
            </div>
          </Card>
        </>
      )}

      <Card style={{ marginTop: '30px', background: 'var(--bg-primary)' }}>
        <h4 style={{ marginBottom: '10px' }}>How it works:</h4>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <li>Upload a clear photo or PDF of your prescription</li>
          <li>Our AI-powered OCR extracts medicine names automatically</li>
          <li>Review the extracted medicines and add them to cart</li>
          <li>Proceed to checkout for quick delivery</li>
        </ol>
      </Card>
    </div>
  );
};
