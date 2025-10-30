// components/Services.jsx
import "../CSS/Services.css";

function Services() {
  const services = [
    {
      title: "PW - Collaboration",
      desc: "Collaborated with a unicorn company to run a campaign, impacting 2000+ students",
    },
    {
      title: "Shark Tank India",
      desc: "Selected for Shark Tank India – Phase 3 (2025) - in person audition, recognized for innovation and business potential.",
    },
    {
      title: "IDEAS Program",
      desc: "Secured ₹2.5L funding from IIT Bombay’s IDEAS program to scale our bussiness model",
    },
    {
      title: "Catalyst",
      desc: "Generated (INR) 3 Lakhs+ revenue in the first year, building a sustainable student-first mentorship model",
    },
  ];

  return (
    <section className="services">
      <h2>
        <span className="services-highlight">Achievements</span> till now
      </h2>
      <div className="service-cards">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;

