import "../CSS/Projects.css"

interface Work {
    id:number;
    image: string,
    title: string,
    Description: string,
    url: string,
}

const Listings: Work[] = [
    {id:1 , image:"CATALYST.png" , title:"Catalyst Website" , Description:"The Catalyst Project website is a clean, responsive, and user-friendly platform designed to showcase the mission, vision, and initiatives of The Catalyst Project. Built using HTML, CSS, and JavaScript, the website provides a smooth browsing experience with an intuitive layout. It offers detailed information about the project’s objectives, upcoming events, and key achievements, along with a contact section for users to reach out for collaborations or inquiries. The website is designed to be easily maintainable and visually appealing, ensuring a strong online presence for The Catalyst Project", url:"https://thecatalystproject.in"},
    {id:2 , image:"Task.png" , title:"Task Manager" , Description:"The Task Manager App is a sleek and efficient web application built using React, Vite, and TypeScript. Designed for effective task management, it allows users to add, edit, and delete tasks within a single, dynamic component (Task.tsx). The app features a clean user interface with a responsive design and includes a dark and light mode toggle, providing users with a customizable viewing experience. It utilizes state management for smooth task handling and offers an intuitive layout for managing daily tasks. The app is optimized for performance and designed to be easily extendable for future enhancements", url:"https://task-manager6905.netlify.app/"},
    {id:3 , image:"FinanceX.png" , title:"FinanceX" , Description:"FinanceX is a comprehensive personal finance management platform designed to help users effectively track, manage, and optimize their financial activities. Built with a user-friendly interface, FinanceX allows users to monitor income, expenses, savings, and investments in one place. It offers insightful data visualization, budget planning, and expense categorization, empowering users to make informed financial decisions. With secure authentication and data encryption, FinanceX ensures user data privacy. The platform is designed to be scalable, making it suitable for individuals, families, and small businesses seeking efficient financial management", url:"https://financex6905.netlify.app/"},
    {id:4 , image:"MarketX.png" , title:"MarketX" , Description:"MarketX is a simple yet effective platform designed to connect customers directly with businesses. It enables users to discover products or services offered by businesses and easily get in touch with them. With a clean and user-friendly interface, MarketX allows businesses to list their offerings and provide contact information, making it easier for customers to reach out. The platform focuses on direct customer engagement without the complexity of inventory management or online transactions, providing a straightforward solution for businesses to connect with potential customers", url:"https://marketx6905.netlify.app/"},

]

const handleCardClick = (url: string) => {
    window.open(url, "_blank"); 
};

const Project = () => {
    return(
        <div>
            <h1 className="Project-title">Projects</h1>
            <div className="Box-grid">
                {Listings.map((item)=>(
                    <div className="Box" key={item.id} onClick={() => handleCardClick(item.url)}>
                        <img className="Box-photo" src={item.image}></img>
                        <div className="Box-Brief">
                            <p className="Box-title">{item.title}</p>
                            <div className="Box-Description">
                                <p className="Project-Description">{item.Description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;