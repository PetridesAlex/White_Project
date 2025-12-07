const Services = () => {

  const services = [
    {
      icon: '🚀',
      title: 'High-Speed Internet',
      description: 'Speed built for competitive players and smooth gameplay.'
    },
    {
      icon: '🎮',
      title: 'Gaming Zone',
      description: 'Premium gaming PCs with the latest hardware and top-tier graphics cards.'
    },
    {
      icon: '💼',
      title: 'Business Center',
      description: 'Quiet workspace with meeting facilities.'
    },
    {
      icon: '☕',
      title: 'Cafe & Lounge',
      description: 'Comfortable seating, refreshments, and a relaxing atmosphere for all your needs.'
    },
    {
      icon: '🎂',
      title: 'Create your own birthday parties & Events',
      description: "Book your birthday party with us! Enjoy gaming PCs, PS5 stations, and tasty food and drinks. A fun, safe, and easy celebration for everyone."
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Host your event in a cozy lounge setting with fast PCs, strong WiFi, and comfortable seating.'
    }
  ];

  // Set white solid background
  const servicesStyle = {
    background: '#FFFFFF',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="services" className="services" style={servicesStyle}>
      <div className="services-content">
        <h2 className="section-title-large">OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-wrapper"
            >
              <div className="service-card">
                <div className="service-card-front">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-card-back">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

