const Services = () => {

  const services = [
    {
      icon: '🚀',
      title: 'High-Speed Internet',
      description: 'Experience ultra-fast fiber-optic internet built for gamers, creators, and professionals. Enjoy seamless browsing, lightning-quick downloads, and zero-lag online performance.'
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
      description: "Book your child's birthday with us! We provide a fully equipped play space with high-performance Gaming PCs, PlayStation 5 stations (managed and ready to play), plus a full menu of food and beverages. Fun, safe, and unforgettable — everything is taken care of."
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Host your corporate event in our modern, fully equipped space. Enjoy high-performance workstations, meeting areas, optional gaming stations for team-building, and a full menu of food and beverages. Perfect for workshops, team events, presentations, and after-work gatherings.'
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

