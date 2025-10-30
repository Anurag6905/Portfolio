import "../CSS/Experience.css";

const experiences = [
  {
    company: "The Catalyst Project",
    role: "Co-Founder & CTO",
    period: "Jan 2025 - Present",
    description: [
      "Generated (INR) 3 Lakhs+ revenue in the first year, building a sustainable student-first mentorship model",
      "Recruited and managed 100+ mentors while leading a 15+ intern core team across strategy, product, ops",
      "Successfully negotiated and secured a strategic partnership with EdTech giant Physics Wallah for Catalyst",
      "Expanded to a pan-India presence, reaching 5k+ aspirants and onboarding students from 20+ states"
    ],
  },
  {
    company: "IIT Bombay Racing Team",
    role: "Assistant Manager",
    period: "Aug 2025 - Present",
    description: [
      "Curated social media content that got over 10,000+ likes and 1,00,000+ views across social media platform",
      "Designed a strategic BPP pitch deck for the Formula Bharat, clearly highlighting business strategy and planning",
      "Contributed to the New official website of the team to showcase, technical innovation and attract sponsors"
    ],
  },
  {
    company: "Institute Technical Council",
    role: "Web Convener",
    period: "Apr 2025 - Present",
    description: [
      "Managing and maintaining all official web platforms of ITC, serving a user base of 15,000+ students and faculty ",
      "Represented the Web Team at the ITC Orientation, engaging 1,000+ incoming students about its initiatives",
      "Designed and delivered the WebCraft course, successfully enrolling and mentoring 60+ students in web development"
    ],
  },
  {
    company: "Techfest, IIT Bombay",
    role: "Web & Tech Co-ordinator",
    period: "May 2025 - Present",
    description: [
      "Contributed to the official Techfest website, ensuring seamless experience for 7M+ annual users across 100+ countries",
      "Collaborated with design and content teams to deliver user-friendly digital experiences for students, corporates, and international partners",
      "Provided on-ground technical support during live events, resolving issues in real time to ensure flawless execution"
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

