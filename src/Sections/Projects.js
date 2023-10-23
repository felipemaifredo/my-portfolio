//Imports
import { Link } from 'react-router-dom';
import Observer from '../Components/Observer/observer';
import PageTransition from '../Components/PageTransition/PageTransition';

import './Styles/projects.style.css';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PiGearLight } from 'react-icons/pi';
import { LuLibrary } from 'react-icons/lu';
import { BsImages } from 'react-icons/bs';

const Projects = () => {
    
    const createCardProject = ({ img, nameP, link, text, isFliped, index}) => {
        return(
            <>  
                <Observer threshold={[0, 0.5, 1]}>  
                    <div key={index} className={isFliped ? 'column-item init-hidden' : 'column-item init-hidden isfliped'}>
                        <div className='title-box-item'>
                            {img}
                            <h3 className='texts-projects'> {nameP} </h3>
                            <Link to={link} onClick={PageTransition}> <AiOutlineArrowRight/> </Link>
                        </div>
                        <div className='info-box-item'>
                            <p className='texts-projects'>{text}</p>
                        </div>
                    </div>
                </Observer>
            </>
        )
    }

    const RoutesPages = [
        {
            nameP: 'Projetos', 
            img: <BsCodeSlash />,
            text: 'Ferramentas criadas para treinar e me aprimorar em desenvolvimento web.', 
            link: '/projects',
            isFliped: true
        },
        {
            nameP: 'Trabalhos', 
            img: <PiGearLight />,
            text: 'Meus trabalhos reais já feitos.', 
            link: '/works',
            isFliped: false
        },
        {
            nameP: 'Biblioteca', 
            img: <LuLibrary />,
            text: 'Componentes prontos que podem ser copiados.', 
            link: '/library',
            isFliped: true
        },
        {
            nameP: 'Galeria', 
            img: <BsImages />,
            text: 'Sites prontos.', 
            link: '/galery',
            isFliped: false
        }

    ]

    return(
        <section id='projects'>
           {RoutesPages.map((RoutePage, index) => (
                <>
                    {createCardProject({ nameP: RoutePage.nameP, img: RoutePage.img, text: RoutePage.text, link: RoutePage.link, isFliped: RoutePage.isFliped, key: index })}
                </>
            ))}
        </section>
    )
}

export default Projects;