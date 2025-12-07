// ============================================
// LOCATION COMPONENT
// ============================================
import locationBackground from '../assets/images/download (2).jpeg';

const Location = () => {
  // Google Maps embed URL with exact coordinates for accurate pin placement
  // Coordinates: 34.6982409, 33.0486068
  const latitude = 34.6982409;
  const longitude = 33.0489068;
  const address = "Spyrou Kyprianou 4";
  
  // Better Google Maps embed URL format
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=17&output=embed`;
  const googleMapsLink = `https://www.google.com/maps/place/White+Tiger/@34.6976444,33.0457698,17z/data=!4m15!1m8!3m7!1s0x14e7336f0ed75279:0xd16e3d1e137e88e2!2sSpyrou+Kyprianou+Ave+4,+Limassol+4001!3b1!8m2!3d34.6976444!4d33.0483447!16s%2Fg%2F11m_jp7k62!3m5!1s0x14e733c3775fa7af:0x5cc17a07892597b7!8m2!3d34.6982409!4d33.0486068!16s%2Fg%2F11mkr57fsg?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D`;

  const locationStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${locationBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="location" className="location" style={locationStyle}>
      {/* Pink decorative shapes */}
      <div className="location-pink-shape location-pink-shape-1"></div>
      <div className="location-pink-shape location-pink-shape-2"></div>
      <div className="location-pink-shape location-pink-shape-3"></div>
      <div className="location-wrapper">
        <div className="location-content">
          <div className="location-info-wrapper">
            <h2 className="section-title-large">Location</h2>
            <div className="location-info">
              <div className="location-details">
                <div className="location-item">
                  <svg className="location-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p className="location-label">Address</p>
                    <p className="location-text">Spyrou Kyprianou 4</p>
                    <p className="location-text">Cyprus</p>
                  </div>
                </div>
              </div>
              <a 
                href={googleMapsLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary location-btn"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <div className="location-map">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="White Tiger Location"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

