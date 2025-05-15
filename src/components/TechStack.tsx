
import '../CSS/TechStack.css';

const techStack = [
  { name: 'React', icon: '/public/react.png' },
  { name: 'TypeScript', icon: '/public/Tsx.png' },
  // { name: 'Node.js', icon: '/public/Nodejs.png' },
  // { name: 'MongoDB', icon: '/public/mongoDB.png' },
  // { name: 'Java', icon: '/public/java.png' },
  // { name: 'Python', icon: '/public/python.png' },
  // { name: 'Django', icon: '/public/django-removebg-preview.png' },
  // { name: 'SQL', icon: '/public/sql-removebg-preview.png' },
  { name: 'JavaScript', icon: '/public/js1.png' },
  { name: 'CSS', icon: '/public/css-removebg-preview.png' },
  { name: 'HTML', icon: '/public/html-removebg-preview.png' },
  { name: 'C++', icon: '/public/C++.png' },
  { name: 'GitHub', icon: '/public/github.jpg' },
  { name: 'Canva', icon: '/public/canva-removebg-preview.png' },
  { name: 'Figma', icon: '/public/figma.png' },
  { name: 'Photoshop', icon: '/public/photoshop.jpg' },
  { name: 'Fusion360', icon: '/public/fusion-removebg-preview.png' },
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

