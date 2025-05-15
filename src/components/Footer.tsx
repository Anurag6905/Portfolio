
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Anurag</h2>
                <p className="footer-tagline">Code. Capture. Create.</p>
                <div className="Contact">
                    <p className='info'>Email -<span className='Email'>anuragdesai2019@gmail.com</span></p>
                    <p className='info'>Number -<span className='Number'>7499972586</span></p>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/Anurag6905" target="_blank" rel="noopener noreferrer">
                        <img src="/github.jpg" alt="GitHub" className="social-icon" />
                        <span className='social-name'>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/anurag-desai-a37a35333/?trk=PROFILE_DROP_DOWN" target="_blank" rel="noopener noreferrer">
                        <img src="/Linkedinpencil-removebg-preview.png" alt="LinkedIn" className="social-icon" />
                        <span className='social-name'>Linkedin</span>
                    </a>
                    <a href="https://www.instagram.com/anurag.desai.695" target="_blank" rel="noopener noreferrer">
                        <img src="/instapencil-removebg-preview.png" alt="Instagram" className="social-icon" />
                        <span className='social-name'>Instagram</span>
                    </a>
                    <a href="https://in.pinterest.com/anuragdesai2019/" target="_blank" rel="noopener noreferrer">
                        <img src="/pinterest-removebg-preview.png" alt="Pinterest" className="social-icon" />
                        <span className='social-name'>Pinterest</span>
                    </a>
                </div>
                <p className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
