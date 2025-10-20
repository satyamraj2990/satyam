import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  gradient?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  gradient = false,
  style
}) => {
  return (
    <div 
      className={`card ${gradient ? 'card-gradient' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
