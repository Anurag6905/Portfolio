// components/Skills.jsx
import "../CSS/Skills.css";

// Demo skills data array
const skills = [
  { icon: "../public/React.png", label: "React.js"},
  { icon: "../public/django-removebg-preview.png", label: "Django"},
  { icon: "../public/js1.png", label: "JavaScript"},
  { icon: "../public/Nodejs.png", label: "Node.js"},
  { icon: "../public/figma.png", label: "Figma"},
  { icon: "../public/photoshop.jpg", label: "Photoshop"}
];

function Skills() {
  return (
    <section className="skills-section">
      <h3>
        <span className="skills-highlight">Exploring the Tools</span><br />
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
