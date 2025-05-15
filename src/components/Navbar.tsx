import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Compo">
      <div className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <a href="#project" className="nav-link" onClick={handleProjectsClick}>Projects</a>
        <Link to="/gallery" className="nav-link">PhotoGallery</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
