
import '../CSS/TechStack.css';

const techStack = [
  { name: 'React', icon: '/react.png' },
  { name: 'TypeScript', icon: '/tsx.png' },
  // { name: 'Node.js', icon: '/Nodejs.png' },
  // { name: 'MongoDB', icon: '/mongoDB.png' },
  // { name: 'Java', icon: '/java.png' },
  // { name: 'Python', icon: '/python.png' },
  // { name: 'Django', icon: '/django-removebg-preview.png' },
  // { name: 'SQL', icon: '/sql-removebg-preview.png' },
  { name: 'JavaScript', icon: '/js1.png' },
  { name: 'CSS', icon: '/css-removebg-preview.png' },
  { name: 'HTML', icon: '/html-removebg-preview.png' },
  { name: 'C++', icon: '/c++.png' },
  { name: 'GitHub', icon: '/github.jpg' },
  { name: 'Canva', icon: '/canva-removebg-preview.png' },
  { name: 'Figma', icon: '/figma.png' },
  { name: 'Photoshop', icon: '/photoshop.jpg' },
  { name: 'Fusion360', icon: '/fusion-removebg-preview.png' },
];

const TechStack = () => {
  return (
    <section className="techstack-section">
      <h2 className="techstack-heading">TechStack</h2>
      <div className="techstack-grid">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-card">
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

