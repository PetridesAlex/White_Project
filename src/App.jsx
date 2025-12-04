// ============================================
// IMPORTS: Bring in React features and components
// ============================================
import React, { useState } from 'react';

// Import all our custom components (like importing functions)
import Loader from './components/Loader';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import FlowingMenuSection from './components/FlowingMenuSection';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

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
  return (
    <div className="App">
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      {/* All page sections */}
      <Hero />
      <Services />
      <Features />
      <FlowingMenuSection />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

// Export this component so other files can use it
export default App;
