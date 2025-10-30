// components/Projects.jsx
import "../CSS/Projects.css";

// Dummy data for projects grid
const projects = [
  {
    image: "/BCC.png",
    title: "BCC - Strategy Case Competition",
    tags: ["Strategy", "Business Analysis", "Market Analysis", "Case Study"]
  },
  {
    image: "/ConsultX.png",
    title: "Consult X - Case Study",
    tags: ["Case Study", "Strategy"]
  },
  {
    image: "/Glitter.png",
    title: "Glitter - Social Media App",
    tags: ["Django", "Figma", "Web-Application", "Social Media"]
  },
  {
    image: "/Expense.png",
    title: "Expense Tracker – Personal Finance Management App",
    tags: ["React.js", "Javascript", "UI/UX", "Web Application"]
  },
  {
    image: "/Adlink.png",
    title: "Adlink - Marketing Agency",
    tags: ["React.js", "Javascript", "UI/UX", "Web Application"]
  },
  {
    image: "/CATALYST.png",
    title: "Catalyst - Online Learning Platform",
    tags: ["Javascript", "Online-Platform", "UI/UX", "Web Application"]
  }
];

function Projects() {
  return (
    <section className="projects-section">
      <header className="projects-header">
        <div>
          <span className="projects-highlight">My Portfolio</span>
          <h3>
            My Latest <span className="projects-highlight">Projects</span>
          </h3>
        </div>
        <button className="view-all-btn">View All Projects</button>
      </header>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h4>{project.title}</h4>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
