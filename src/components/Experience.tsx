import "../CSS/Experience.css";

const experiences = [
  {
    company: "The Catalyst Project",
    role: "Co-Founder & CTO",
    period: "Jan 2025 - Present",
    description: [
      "Drove business growth to ₹3L+ revenue within 5 months by leading logistics, operations, and strategy alongside the co-founder.",
      "Secured ₹2.5L funding from IIT Bombay’s IDEAS Program, ensuring financial support for product development and scaling",
      "Built and launched the official website from scratch, managing all technical infrastructure and digital presence of the startup"
    ],
  },
  {
    company: "Institute Technical Council",
    role: "Web Convener",
    period: "Apr 2025 - Present",
    description: [
      "Managing and maintaining all official web platforms of ITC, serving a user base of 15,000+ students and faculty ",
      "Built and launched flagship projects including the Club Royale and Bio-X websites, unveiled in front of a live audience of 1000+ people",
      "Led digital infrastructure development for clubs & technical events, ensuring smooth operations across the council"
    ],
  },
  {
    company: "Techfest, IIT Bombay",
    role: "Web & Tech Co-ordinator",
    period: "May 2025 - Present",
    description: [
      "Managed tech infrastructure for event websites.",
      "Supported technical teams during live events.",
      "Ensured smooth deployment and maintenance."
    ],
  },
  {
    company: "IIT Bombay Racing Team",
    role: "Assistant Manager",
    period: "Aug 2025 - Present",
    description: [
      "Strengthened the team’s digital presence through online platforms and sponsor outreach",
      "Worked on pitch decks and competitor analysis, benchmarking global Formula Student teams to refine IIT Bombay Racing’s positioning",
      "Designed and contributed to the new official website (under development) to showcase technical innovation and attract sponsors"
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section">
      <h2>
        My <span className="highlight-experience">Experience</span>
      </h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-header">
              <h3 className="company-name">{exp.company}</h3>
              <span className="role-period">{exp.role} | {exp.period}</span>
            </div>
            <ul className="experience-description">
              {exp.description.map((point, idx2) => (
                <li key={idx2}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

