
import './Projects-style.css'
//Assets
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Calculadora from '../../assets/projects/calculadora.png'

function Projects() {

    const renderCard = (imagem, tittle, text, linkGithub, linkProject) => {
      return (
      <div className='card-item'>
          <div className='img-box'>
            <img src={imagem} alt='Imagem de Projeto' />
          </div>
          <div className='title-box'>
            <h2 className='texts-projects'>{tittle}</h2>
          </div>
          <div className='text-box'>
            <p className='texts-projects'> {text} </p>
          </div>
          <div className='btn-box'>
            <a href={linkGithub} target='_blanck' rel="noreferrer"> <BsCodeSlash /> </a>
            <a href={linkProject} target='_blanck' rel="noreferrer"> <AiOutlineEye /> </a>
          </div>
        </div>
    )}

    return (
      <div className="Projects">

        {renderCard(
          Calculadora,
          'Calculadora',
          'Um dos Meus Primeiros Projetos com Javascript, criando uma calculadora.',
          'https://github.com/felipemaifredo/calculadora',
          'https://felipemaifredo.github.io/calculadora/'
         )}

      </div>
    );
}
  
export default Projects;