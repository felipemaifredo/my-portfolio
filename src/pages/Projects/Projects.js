//Assets

//Imports
import './Projects-style.css';
import { Link } from 'react-router-dom';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { BsCardImage } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { BsGearWideConnected } from "react-icons/bs";

//Components/Sections

function Projects() {

  const pageTransition = () => {
    document.querySelector('body').classList.add('page-transition')
    setTimeout(() => {
      document.querySelector('body').classList.remove('page-transition')
    }, 1001)
  }

  const RenderItem = ( image, name, text, link ) => {
    return (
      <div className='item-sec-projects'> 
        <div className='img-box-item'> {image} </div>
        <div className='texts-box-item'>
          <h3 className='texts-projects'> {name} </h3>
          <p className='texts-projects'> {text} </p>
        </div>
        <div className='btn-box-item'>
          <Link to={link} onClick={pageTransition}> <span className='texts-projects'> Acesse </span> <BsArrowRightCircleFill /> </Link>
        </div>
      </div>
    )
  }

    return (
      <section id='Projects' className="Section">
        <div className='box-sec-projects'>
          {RenderItem( <BsCodeSlash />, 'Projetos', 'Ferramentas criadas com o intuito de treinar e desenvolver minhas habilidades.', '/projects', )}

          {RenderItem( <BsCardImage />, 'Galeria', 'Sites completos criados para me aprimorar', '/gallery', )}

          {RenderItem( <BsBookmarks />, 'Biblioteca', 'Componentes aleatórios criados', '/library', )}

          {RenderItem( <BsGearWideConnected />, 'Trabalhos', 'Meus Trabalhos Reais', '/works', )}
        </div>
      </section>
    );
}
  
export default Projects;