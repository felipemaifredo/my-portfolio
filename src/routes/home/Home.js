//Assets

//Imports

//Components/Sections
import ScrollTo from '../../components/ScrollTo';
import Section1 from '../../pages/Section1/Section1';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';

function Home() {
    return (
      <div className="Home">
        <Section1 />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollTo />
      </div>
    );
}
  
export default Home;