// components/Hero.jsx
import "../CSS/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Web Developer</span>
        <h1>
          I’m <span className="highlight">Anurag Desai</span><br />
          Web Developer<br />
          Based in India
        </h1>
        <div className="hero-actions">
          <button className="portfolio-btn">My Projects</button>
          <button className="hire-btn">About Me</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          className="hero-image"
          src="/me3.jpg"
          alt="Olivia Smith"
        />
        <button className="cv-btn">Resume</button>
      </div>
    </section>
  );
}
export default Hero;
