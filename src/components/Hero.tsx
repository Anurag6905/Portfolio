import "../CSS/Hero.css";

const Hero = () => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `${import.meta.env.BASE_URL}RESUME%20(2).pdf`;
        link.download = "RESUME.pdf";
        link.click();
    };

    const handleProjectsClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const projectSection = document.getElementById("project");
        if (projectSection) {
          projectSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <div>
            <div className="Hero">
                <div className="Hero-container">
                    <p className="Hero-title">Hi, I am Anurag</p>
                    <p className="Hero-Description">A passionate developer, designer, and creator who loves building sleek,
                        functional, and user-friendly web experiences. Whether it’s crafting clean UIs, designing visuals,
                        or bringing ideas to life through code — I’m all about creating things that leave an impact 🚀</p>
                    <div className="Hero-btn">
                        <button className="btn-projects" onClick={handleProjectsClick}>View Projects</button>
                        <button className="btn-resume" onClick={handleDownload}>Download Resume</button>
                    </div>
                </div>
                <div className="photo">
                    <div className="face"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;