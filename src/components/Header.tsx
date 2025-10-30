import { useState } from "react";
import "../CSS/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking link
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">Anu.rag</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>Projects</li>
          <li onClick={closeMenu}>About</li>
          <li onClick={closeMenu}>Achievements</li>
          <li onClick={closeMenu}>Skills</li>
        </ul>
      </nav>

      <button className="header-contact-btn">Contact Me</button>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;


