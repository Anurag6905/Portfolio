import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Project from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import PhotoGallery2 from './components/PhotoGallery2';
import TechStack from './components/TechStack';
import Blog from './components/Blog';
import Footer from "./components/Footer";
// import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div>
      {/* <Spline scene="https://prod.spline.design/kzyNOZNaZyGsYOjS/scene.splinecode" /> */}
      <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div id="hero">
                <Hero />
              </div>

              <div id="experience">
                <Experience />
              </div>

              <div id="project">
                <Project />
              </div>

              <div id="skills">
                <Skills />
              </div>
            
              <div id="techstack">
                <TechStack />
              </div>
    
              <Footer/>

            </div>
          }
        />
        <Route path="/gallery" element={<><PhotoGallery /><PhotoGallery2 /><Footer/></>} />
        <Route path="/blog" element={<><Blog /><Footer/></>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;


