import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 40, color = '#3b82f6' }) => {
  return (
    <div className="loading-spinner-container">
      <div 
        className="loading-spinner" 
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          borderTopColor: color 
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
