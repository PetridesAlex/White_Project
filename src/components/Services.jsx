import { useEffect, useRef } from 'react';
// Import services background image (cafe interior)
import servicesBackground from '../assets/images/download (1).jpeg';

const Services = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    serviceCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      }
    });

    return () => {
      serviceCardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: '🚀',
      title: 'High-Speed Internet',
      description: 'Blazing fast fiber-optic connection for seamless browsing, streaming, and downloads.'
    },
    {
      icon: '🎮',
      title: 'Gaming Zone',
      description: 'Premium gaming PCs with the latest hardware and top-tier graphics cards.'
    },
    {
      icon: '💼',
      title: 'Business Center',
      description: 'Quiet workspace with printing, scanning, and professional meeting facilities.'
    },
    {
      icon: '☕',
      title: 'Cafe & Lounge',
      description: 'Comfortable seating, refreshments, and a relaxing atmosphere for all your needs.'
    }
  ];

  // Set background image style with dark overlay for text readability
  const servicesStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${servicesBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="services" className="services" style={servicesStyle}>
      <div className="services-content">
        <h2 className="section-title-large">OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              ref={el => serviceCardsRef.current[index] = el}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

