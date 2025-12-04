import logo from '../assets/images/logo.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-logo-container">
          <img src={logo} alt="White Tiger Logo" className="hero-logo" />
          <h1 className="hero-welcome">Welcome to White Tiger</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

