import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 40, color = '#3b82f6', variant = 'cosmic' }) => {
  if (variant === 'cosmic') {
    return (
      <div className="cosmic-loading-container">
        {/* Cosmic background elements */}
        <div className="cosmic-loading-bg">
          <div className="loading-star loading-star-1"></div>
          <div className="loading-star loading-star-2"></div>
          <div className="loading-star loading-star-3"></div>
          <div className="loading-star loading-star-4"></div>
          <div className="loading-particle loading-particle-1"></div>
          <div className="loading-particle loading-particle-2"></div>
          <div className="loading-particle loading-particle-3"></div>
        </div>

        {/* Main cosmic spinner */}
        <div className="cosmic-spinner-wrapper">
          {/* Outer rotating ring */}
          <div 
            className="cosmic-ring-outer" 
            style={{ 
              width: `${size + 20}px`, 
              height: `${size + 20}px`,
              borderColor: `${color}33`
            }}
          ></div>

          {/* Middle rotating ring */}
          <div 
            className="cosmic-ring-middle" 
            style={{ 
              width: `${size + 10}px`, 
              height: `${size + 10}px`,
              borderTopColor: color,
              borderRightColor: `${color}66`
            }}
          ></div>

          {/* Inner core */}
          <div 
            className="cosmic-core" 
            style={{ 
              width: `${size}px`, 
              height: `${size}px`,
              background: `radial-gradient(circle, ${color}, ${color}66, transparent)`
            }}
          ></div>

          {/* Orbiting elements */}
          <div className="cosmic-orbit cosmic-orbit-1">
            <div className="cosmic-dot" style={{ backgroundColor: color }}></div>
          </div>
          <div className="cosmic-orbit cosmic-orbit-2">
            <div className="cosmic-dot" style={{ backgroundColor: `${color}88` }}></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="cosmic-loading-text">
          <span className="loading-letter">L</span>
          <span className="loading-letter">o</span>
          <span className="loading-letter">a</span>
          <span className="loading-letter">d</span>
          <span className="loading-letter">i</span>
          <span className="loading-letter">n</span>
          <span className="loading-letter">g</span>
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>
    );
  }

  // Fallback to simple spinner
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
