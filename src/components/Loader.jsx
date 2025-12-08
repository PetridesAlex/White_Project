// ============================================
// LOADER COMPONENT - White Tiger Loading Screen
// ============================================
import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import './Loader.css';

function Loader({ onLoadComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Load immediately without any delays
    const handleLoad = () => {
      setIsFading(true);
      // Wait for fade out animation before calling onLoadComplete
      setTimeout(() => {
        setIsVisible(false);
        if (onLoadComplete) onLoadComplete();
      }, 300);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      // Load immediately
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loader-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="loader-container">
        <div className="loader-content">
          <div className="logo-wrapper">
            <img 
              src={logo} 
              alt="White Tiger Logo" 
              className="loader-logo"
              onError={(e) => {
                console.error('Logo failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h1 className="loader-text">WHITE TIGER</h1>
          <div className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;

