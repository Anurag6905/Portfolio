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
          <img src="/insta.jpg" alt="Instagram" />
        </a>
        <a
          href="https://github.com/Anurag6905"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src="/github-removebg-preview.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/anurag-desai-a37a35333/?trk=PROFILE_DROP_DOWN"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="https://in.pinterest.com/anuragdesai2019"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
        >
          <img src="/pinterest-removebg-preview.png" alt="Pinterest" />
        </a>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <a href="tel:+917499972586" className="contact-link" aria-label="Phone Number">
          📞 +91 7499972586
        </a>
        <a href="anuragdesai2019@gmail.com" className="contact-link" aria-label="Email Address">
          ✉️ anuragdesai2019@gmail.com
        </a>
      </div>

      <div className="Linkedin">
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="anurag-desai-a37a35333" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/anurag-desai-a37a35333?trk=profile-badge"></a></div>
        <a className="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=anurag-desai-a37a35333" target="_blank">Follow on LinkedIn</a>
      </div>

    </section>
  );
}

export default SocialLinks;
