// ============================================
// IMPORTS: Bring in React features and components
// ============================================
import React, { useState, Suspense, lazy } from 'react';

// Import critical components immediately
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components for better performance (code splitting)
const Services = lazy(() => import('./components/Services'));
const Reviews = lazy(() => import('./components/Reviews'));
const FlowingMenuSection = lazy(() => import('./components/FlowingMenuSection'));
const Contact = lazy(() => import('./components/Contact'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));

// ============================================
// MAIN APP COMPONENT
// ============================================
// This is the "brain" of our app - it controls everything
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // ============================================
  // RENDER: What the component displays
  // ============================================
  // This JSX (HTML-like code) is what users see
  // Loading fallback component
  const LoadingFallback = () => (
    <div style={{ 
      minHeight: '200px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      opacity: 0.5
    }}>
      <div>Loading...</div>
    </div>
  );

  return (
    <div className="App">
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      <Navbar />
      {/* All page sections */}
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Services />
        <Reviews />
        <FlowingMenuSection />
        <Contact />
        <Location />
        <Footer />
      </Suspense>
    </div>
  );
}

// Export this component so other files can use it
export default App;
