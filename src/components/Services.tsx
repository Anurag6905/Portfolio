// components/Services.jsx
import "../CSS/Services.css";

function Services() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Intuitive and modern user interface and experience design.",
    },
    {
      title: "Application Design",
      desc: "Designing apps with a focus on user needs and modern trends.",
    },
    {
      title: "Website Design",
      desc: "Responsive and engaging website design for your brand.",
    },
  ];

  return (
    <section className="services">
      <h2>
        <span className="services-highlight">Services</span> I Provide
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

