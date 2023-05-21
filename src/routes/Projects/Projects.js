
import './Projects-style.css'
//Assets
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Calculadora from '../../assets/projects/calculadora.png'
import clock from '../../assets/projects/clock.png'
import To_do from '../../assets/projects/to_do.png'
import PassChecker from '../../assets/projects/pass_checekr.png'
import Passgene from '../../assets/projects/pass_gene.png'
import Pokedex from '../../assets/projects/pokedex.png';

function Projects() {

    const renderCard = (imagem, tittle, text, linkGithub, linkProject) => {
      return (
      <div className='card-item'>
          <div className='img-box'>
            <img src={imagem} alt= 'Imagem de Projeto' />
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
          Pokedex,
          'Pokedex',
          'Um dos Meus Primeiros Projetos utilizando APIs com Javascript/React.',
          'https://github.com/felipemaifredo/pokedex-app',
          'https://felipemaifredo.github.io/pokedex-app/'
        )}

        {renderCard(
          To_do,
          'Lista de Tarefas',
          'Um dos Meus Primeiros Projetos com Javascript, criando uma lista de tarefas.',
          'https://github.com/felipemaifredo/to_do_list',
          'https://felipemaifredo.github.io/to_do_list/'
        )}

        {renderCard(
          Passgene,
          'Gerador de Senhas',
          'Um dos Meus Primeiros Projetos com Javascript, criando gerador de senha.',
          'https://github.com/felipemaifredo/password_generator',
          'https://felipemaifredo.github.io/password_generator/'
        )}

        {renderCard(
          PassChecker,
          'Analisador de Senha',
          'Um dos Meus Primeiros Projetos com Javascript, criando Analisador de senha.',
          'https://github.com/felipemaifredo/password_Checker',
          'https://felipemaifredo.github.io/password_Checker/'
        )}

        {renderCard(
          Calculadora,
          'Calculadora',
          'Um dos Meus Primeiros Projetos com Javascript, criando uma calculadora.',
          'https://github.com/felipemaifredo/calculadora',
          'https://felipemaifredo.github.io/calculadora/'
        )}

        {renderCard(
          clock,
          'Relógio',
          'Um dos Meus Primeiros Projetos com Javascript, criando um relógio.',
          'https://github.com/felipemaifredo/clock',
          'https://felipemaifredo.github.io/clock/'
        )}
      </div>
    );
}
  
export default Projects;