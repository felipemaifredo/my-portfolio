//Imports
import { useEffect } from 'react';
import './Styles/home.style.css'

//Sections
import Presentation from "../Sections/Presentation";
import About from '../Sections/About';
import Projects from "../Sections/Projects";
import Skills from '../Sections/Skills';

const Home = () => {
    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });

    return (
        <div id="home">
            <Presentation />
            <About />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home;