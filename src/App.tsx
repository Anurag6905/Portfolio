// App.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavTabs from "./components/NavTabs";
import Services from "./components/Services";
// import About from "./components/About";
import "./App.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Gallery from "./components/Gallery";
// import Blog from "./components/Blog";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Hero />
      {/* <NavTabs /> */}
      <Experience />
      <NavTabs />
      <Skills />
      <Projects />
      <Services />
      {/* <About />
      <Gallery />
      <Blog /> */}
      <SocialLinks />
    </div>
  );
}

export default App;


