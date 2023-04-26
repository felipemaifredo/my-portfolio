//Assets

//Imports
import './Projects-style.css';
import { Link } from 'react-router-dom';
//Components/Sections

function Projects() {
    return (
      <section id='Projects' className="Section">
        <h1 className='texts-projects'>Olá Mundo!</h1>
        <Link to={'/projects/tools'}>Projetos Tools</Link>
      </section>
    );
}
  
export default Projects;