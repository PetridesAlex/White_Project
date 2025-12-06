// ============================================
// LOADER COMPONENT
// ============================================
import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import './Loader.css';

function Loader({ onLoadComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate page loading time
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation before calling onLoadComplete
      setTimeout(() => {
        if (onLoadComplete) onLoadComplete();
      }, 500);
    }, 2000); // Show loader for 2 seconds minimum

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loader-overlay ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loader-container">
        <div className="loader-content">
          <img src={logo} alt="White Tiger Logo" className="loader-logo" />
          <h1 className="loader-text">WHITE TIGER</h1>
        </div>
      </div>
    </div>
  );
}

export default Loader;

