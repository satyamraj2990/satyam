import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { mockHealthServices } from '../../data/mockData';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const NearbyServices: React.FC = () => {
  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'hospital': return '🏥';
      case 'clinic': return '⚕️';
      case 'pharmacy': return '💊';
      default: return '📍';
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Nearby Health Services</h2>

      {/* Map Placeholder */}
      <Card style={{
        height: '300px',
        background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom: '30px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <MapPin size={64} />
          <h3 style={{ marginTop: '15px' }}>Interactive Map View</h3>
          <p style={{ opacity: 0.9, marginTop: '8px' }}>
            Shows nearby pharmacies, clinics, and hospitals
          </p>
        </div>
      </Card>

      {/* Services List */}
      <div className="grid grid-2">
        {mockHealthServices.map((service) => (
          <Card key={service.id}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ fontSize: '40px' }}>{getServiceIcon(service.type)}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '8px' }}>{service.name}</h3>
                <span className="badge badge-success" style={{ marginBottom: '10px' }}>
                  {service.type.toUpperCase()}
                </span>
                
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <MapPin size={16} />
                    <span>{service.address}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Navigation size={16} />
                    <span>{service.distance} away</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} />
                    <span>{service.phone}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                  <Button style={{ flex: 1 }}>
                    <Navigation size={16} />
                    Directions
                  </Button>
                  <Button variant="secondary" style={{ flex: 1 }}>
                    <Phone size={16} />
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
