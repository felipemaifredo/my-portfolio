//Imports
import { useEffect } from 'react';
import './Styles/projects.style.css'
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Calculadora from '../Assets/projects/calculadora.png';
import clock from '../Assets/projects/clock.png';
import To_do from '../Assets/projects/to_do.png';
import PassChecker from '../Assets/projects/pass_checekr.png';
import Passgene from '../Assets/projects/pass_gene.png';
import Pokedex from '../Assets/projects/pokedex.png';
import accountNode from '../Assets/projects/accounts-node.png';
import valorantagent from '../Assets/projects/valorant agent.png';
import secreWord from '../Assets/projects/secret_word.png';

const ProjectsPage = () => {

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });

    const renderCard = (imagem, tittle, text, linkGithub, linkProject) => {
        return (
        <div className='card-item'>
            <div className='img-box'>
              <img src={imagem} alt= 'Imagem de Projeto' />
            </div>
            <div className='title-box'>
              <h2 className='texts-projects text-project'>{tittle}</h2>
            </div>
            <div className='text-box'>
              <p className='texts-projects text-project'> {text} </p>
            </div>
            <div className='btn-box'>
              <a href={linkGithub} target='_blanck' rel="noreferrer"> <BsCodeSlash /> </a>
              { linkProject && <a href={linkProject} target='_blanck' rel="noreferrer"> <AiOutlineEye /> </a>}
            </div>
          </div>
      )}

    return (
        <div id="projects-page">
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
            {renderCard(
                accountNode,
                'Simulador de Banco',
                'Um dos Meus Primeiros Projetos com Nodejs, Projeto Simples de Simulação de Banco',
                'https://github.com/felipemaifredo/accounts_node'
            )}

             {renderCard(
                valorantagent,
                'Sorteador de Agente Valorant',
                'Projeto feito com typescript que faz um sorteio de um agente aleatório de valorant',
                'https://github.com/felipemaifredo/valorant-agent-picker',
                'https://felipemaifredo.github.io/valorant-agent-picker/',
             )}
             {renderCard(
                secreWord,
                'Jogo de Palavra Oculta',
                'Projeto feito com react, de um jogo de forca, onde você precisa adivinhar as letras da palavra',
                'https://github.com/felipemaifredo/secret_word',
                'https://felipemaifredo.github.io/secret_word/',
             )}
        </div>
    )
}

export default ProjectsPage;