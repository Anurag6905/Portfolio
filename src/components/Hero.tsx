// components/Hero.jsx
import "../CSS/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Entrepreneur</span>
        <h1>
          I’m <span className="highlight">Anurag Desai</span><br />
          Student Founder<br />
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
          src="/my-img.png"
          alt="Olivia Smith"
        />
        <button
  className="cv-btn"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Anurag_Resume.pdf"; 
    link.download = "Anurag_Resume.pdf"; 
    link.click();
  }}
>
  Resume
</button>
      </div>
    </section>
  );
}
export default Hero;
