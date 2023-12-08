//Imports
import { useEffect } from 'react';
import './Styles/projects.style.css'
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import Calculadora from '../Assets/projects/calculadora.png';
import clock from '../Assets/projects/clock.png';
import To_do from '../Assets/projects/to_do.png';
import PassChecker from '../Assets/projects/pass_checekr.png';
import Passgene from '../Assets/projects/pass_gene.png';
import Pokedex from '../Assets/projects/pokedex.png';
import accountNode from '../Assets/projects/accounts-node.png';
import valorantagent from '../Assets/projects/valorant agent.png';
import secreWord from '../Assets/projects/secret_word.png';
import todoreact from '../Assets/projects/todo-react.png'

const ProjectsPage = () => {

  const projectsData = [
    { 
      img: Pokedex, 
      name:'Pokedex',
      descrip: 'Um dos Meus Primeiros Projetos utilizando APIs com Javascript/React.',
      linkSee: 'https://github.com/felipemaifredo/pokedex-app',
      linkGH: 'https://felipemaifredo.github.io/pokedex-app/',
      tech: 'React',
      techClass: 'react',
      techImg: <FaReact />,
    },{ 
      img: To_do,
      name: 'Lista de Tarefas',
      descrip: 'Um dos Meus Primeiros Projetos com Javascript, criando uma lista de tarefas.',
      linkGH: 'https://github.com/felipemaifredo/todo_list_react',
      linkSee: 'https://felipemaifredo.github.io/todo_list_react/',
      tech: 'Javascript',
      techClass: 'js',
      techImg: <RiJavascriptFill />,
    },{ 
      img: Passgene,
      name: 'Gerador de Senhas',
      descrip: 'Um dos Meus Primeiros Projetos com Javascript, criando gerador de senha.',
      linkGH: 'https://github.com/felipemaifredo/password_generator',
      linkSee: 'https://felipemaifredo.github.io/password_generator/',
      tech: 'Javascript',
      techClass: 'js',
      techImg: <RiJavascriptFill />,
    },{ 
      img: PassChecker,
      name: 'Analisador de Senha',
      descrip: 'Um dos Meus Primeiros Projetos com Javascript, criando Analisador de senha.',
      linkGH: 'https://github.com/felipemaifredo/password_Checker',
      linkSee: 'https://felipemaifredo.github.io/password_Checker/',
      tech: 'Javascript',
      techClass: 'js',
      techImg: <RiJavascriptFill />,
    },{ 
      img: Calculadora,
      name: 'Calculadora',
      descrip: 'Um dos Meus Primeiros Projetos com Javascript, criando uma calculadora.',
      linkGH: 'https://github.com/felipemaifredo/calculadora',
      linkSee: 'https://felipemaifredo.github.io/calculadora/',
      tech: 'Javascript',
      techClass: 'js',
      techImg: <RiJavascriptFill />,
    },{ 
      img: clock,
      name: 'Relógio',
      descrip: 'Um dos Meus Primeiros Projetos com Javascript, criando um relógio.',
      linkGH: 'https://github.com/felipemaifredo/clock',
      linkSee: 'https://felipemaifredo.github.io/clock/',
      tech: 'Javascript',
      techClass: 'js',
      techImg: <RiJavascriptFill />,
    },{ 
      img: accountNode,
      name: 'Simulador de Banco',
      descrip: 'Um dos Meus Primeiros Projetos com Nodejs, Projeto Simples de Simulação de Banco',
      linkGH: 'https://github.com/felipemaifredo/accounts_node',
      tech: 'Node',
      techClass: 'node',
      techImg: <FaNodeJs />,
    },{ 
      img: valorantagent,
      name: 'Sorteador de Agente Valorant',
      descrip: 'Projeto feito com typescript que faz um sorteio de um agente aleatório de valorant',
      linkGH: 'https://github.com/felipemaifredo/valorant-agent-picker',
      linkSee: 'https://felipemaifredo.github.io/valorant-agent-picker/',
      tech: 'React',
      techClass: 'react',
      techImg: <FaReact />,
    },{ 
      img: secreWord,
      name: 'Jogo de Palavra Oculta',
      descrip: 'Projeto feito com react, de um jogo de forca, onde você precisa adivinhar as letras da palavra',
      linkGH: 'https://github.com/felipemaifredo/secret_word',
      linkSee: 'https://felipemaifredo.github.io/secret_word/',
      tech: 'React',
      techClass: 'react',
      techImg: <FaReact />,
    },{ 
      img: todoreact,
      name: 'Lista de Tarefas',
      descrip: 'Projeto feito com react',
      linkGH: 'https://github.com/felipemaifredo/todo_list_react',
      linkSee: 'https://felipemaifredo.github.io/todo_list_react/',
      tech: 'React',
      techClass: 'react',
      techImg: <FaReact />,
    },
  ];

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };
    scrollToTop();
  });

  const renderProjects = () => {
    return (
      projectsData.map((project, index) => renderCard({...project, index}))
    );
  };

  const renderCard = ({img, name, descrip, linkGH, linkSee, tech, techClass, techImg, index}) => {
    return (
      <div className='card-item' key={index}>
        <div className='img-box'>
          <img src={img} alt= 'Imagem de Projeto' />
        </div>
        <div className='content-box'>
          <div className='title-box'>
            <h2 className='texts-projects text-project'>{name}</h2>
          </div>
          <div className='text-box'>
            <p className='texts-projects text-project'> {descrip} </p>
          </div>
          <div className='tech-box'>
            <div className={`tech tech-${techClass}`}>
              <span> {techImg} </span>
              <p> {tech} </p>
            </div>
          </div>
        </div>
        <div className='btn-box'>
          <a href={linkGH} target='_blanck' rel="noreferrer"> <BsCodeSlash /> </a>
          { linkSee && <a href={linkSee} target='_blanck' rel="noreferrer">
            <AiOutlineEye /> 
          </a>}
        </div>
      </div>
    )};

    return (
      <div id="projects-page">
        {renderProjects()}
      </div>
    );
};

export default ProjectsPage;