import Navbar from "./components/NAVBAR/navbar";
import Intro from "./components/INTRO/intro";
import About from "./components/ABOUT/about";
import Work from "./components/WORK/work";
import Skill from "./components/SKILL/skill";
import Project from "./components/PROJECTS/project";
import Contact from "./components/CONTACT/contact";

function App() {
    return ( 
        <div className = "App" >
          <Navbar />
          <Intro />
          <About />
          <Work />
          <Skill />
          <Project />
          <Contact />
        </div>
    );
}

export default App;   