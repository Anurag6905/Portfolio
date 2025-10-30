// components/Skills.jsx
import "../CSS/Skills.css";

// Demo skills data array
const skills = [
  { icon: "/React.png", label: "React.js"},
  { icon: "/django-removebg-preview.png", label: "Django"},
  { icon: "/js1.png", label: "JavaScript"},
  { icon: "/Nodejs.png", label: "Node.js"},
  { icon: "/figma.png", label: "Figma"},
  { icon: "/photoshop.jpg", label: "Photoshop"},
  { icon: "/canva.png", label: "Canva"}
];

function Skills() {
  return (
    <section className="skills-section">
      <h3>
        <span className="skills-highlight">Explore the Tools</span><br />
        Behind My Projects
      </h3>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div className="skill-item" key={idx}>
            <img src={skill.icon} alt={skill.label} className="skill-icon" />
            <div className="skill-label">{skill.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
