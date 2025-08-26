import "../CSS/SocialLinks.css";

function SocialLinks() {
  return (
    <section className="social-section">
      <h2>
        Connect with <span className="social-highlight">Me</span>
      </h2>
      <div className="social-links">
        {/* Existing social links */}
        <a
          href="https://www.instagram.com/anuragdesai6905/"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="/public/insta.jpg" alt="Instagram" />
        </a>
        <a
          href="https://github.com/Anurag6905"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src="/public/github-removebg-preview.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/anurag-desai-a37a35333/?trk=PROFILE_DROP_DOWN"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/public/linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="https://in.pinterest.com/anuragdesai2019"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
        >
          <img src="/public/pinterest-removebg-preview.png" alt="Pinterest" />
        </a>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <a href="tel:+919876543210" className="contact-link" aria-label="Phone Number">
          📞 +91 7499972586
        </a>
        <a href="mailto:your.email@example.com" className="contact-link" aria-label="Email Address">
          ✉️ anuragdesai2019@gmail.com
        </a>
      </div>
    </section>
  );
}

export default SocialLinks;
