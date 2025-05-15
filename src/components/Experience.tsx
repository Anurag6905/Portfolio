import "../CSS/Experience.css"

interface Positions {
    id: number;
    image: string;
    title: string;
    Description: string;
    Timeline: string;
}

const Work: Positions[] = [
    {id:1 , image:"Catalyst Logo.jpg", title:"CTO - The Catalyst Project" , Description:"As the Chief Technology Officer (CTO) of The Catalyst Project, I lead the development and maintenance of our mentorship platform for JEE aspirants, ensuring a seamless user experience. My role involves overseeing all technical aspects, from designing and coding the website to implementing secure, scalable solutions, while collaborating with the team to drive innovation and optimize performance. I focus on leveraging modern web technologies to create an intuitive platform and continuously explore new features to enhance user engagement.", Timeline:"(Jan'25-Present)"},
    {id:2 , image:"itc.png", title:"Web Convener - ITC" , Description:"The ITC (Institute Technical Council) Web Convener at IIT Bombay is responsible for overseeing the development, maintenance, and management of all official websites under the council. This role involves leading a team of web developers and designers, ensuring that all websites are well-designed, secure, and optimized for performance. The Web Convener coordinates the planning and execution of various web-based projects, implements best practices in web development", Timeline:"(Apr'25-Present)"},
    {id:3 , image:"logo.png", title:"Web and Tech Coordinator" , Description:"As the Web and Tech Coordinator at Techfest, I am responsible for designing, developing, and maintaining the CA website of Techfest in collaboration with the manager. My role involves creating an intuitive, visually appealing, and user-friendly website that efficiently manages user interactions and delivers a seamless experience for our users. My work combines innovative web design, meticulous coding, and constant optimization, making technology a powerful enabler for a grand celebration of ideas and innovation.", Timeline:"(Apr'25-Present)"},
    {id:4 , image:"Racing.png", title:"Creatives - IIT B Racing" , Description:"As a Creatives Trainee at IIT Bombay, I worked on developing engaging visual content and strategies for digital platforms. I used tools like Adobe Photoshop and Canva to design graphics, while also exploring creative strategy and storytelling for social media marketing. My work included graphic design, video editing, and helping shape the visual identity of our campaigns. Through this, I gained hands-on experience in combining creativity with design thinking to communicate ideas effectively and support broader marketing goals", Timeline:"(Feb'25-Present)"},
]

const Experience = () => {
    return(
        <div>
            <div className="Experience">
                <h1 className="Experience-title">Experience</h1>
                    {Work.map((item) => (
                        <div className="Card" key={item.id}>
                            <img className="Card-photo" src={item.image}></img>
                            <div className="Card-Brief">
                                <div className="Card-info">
                                    <p className="Card-title">{item.title}</p>
                                    <p className="Card-Timeline">{item.Timeline}</p>
                                </div> 
                                <div className="Card-Description">
                                    <p className="Description">{item.Description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Experience;