// components/About.jsx
import "../CSS/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-image-section">
        <img
          src="/img/about-placeholder.png"
          className="about-img"
          alt="Olivia Smith"
        />
      </div>
      <div className="about-content">
        <h2>
          Who is <span className="about-highlight">Olivia Smith?</span>
        </h2>
        <div className="about-stats">
          <div className="about-stat"><span>5+</span> Years Experience</div>
          <div className="about-stat"><span>600+</span> Completed Projects</div>
          <div className="about-stat"><span>20+</span> Companies Worked</div>
        </div>
        <div className="about-signature">- Olivia Smith</div>
      </div>
    </section>
  );
}
export default About;


