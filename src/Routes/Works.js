//Imports
import { useEffect } from 'react';
import './Styles/works.style.css'
import { AiOutlineEye } from "react-icons/ai";
import brusun from '../Assets/works/brusun.png';
import loboadv from '../Assets/works/loboadv.png';
import totalseg from '../Assets/works/totalseg.png';
import vec from '../Assets/works/vec.png';
const Works = () => {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };
    scrollToTop();
  });

    const renderCard = (imagem, tittle, text, linkProject) => {
        return (
        <div className='card-item'>
            <div className='img-box'>
              <img src={imagem} alt= 'Imagem de Projeto' />
            </div>
            <div className='title-box'>
              <h2 className='texts-projects texts-works'>{tittle}</h2>
            </div>
            <div className='text-box'>
              <p className='texts-projects texts-works'> {text} </p>
            </div>
            <div className='btn-box'>
              <a href={linkProject} target='_blanck' rel="noreferrer"> <AiOutlineEye /> </a>
            </div>
          </div>
      )}

    return (
        <div id="works">
           {renderCard(
                brusun,
                'Brusun',
                'Um dos Meus Primeiros Projetos utilizando HTML/CSS/Javascript',
                'https://brusun.com.br/',
            )}
            {renderCard(
                loboadv,
                'Lobo Advocacia',
                'Um dos Meus Primeiros Projetos utilizando HTML/CSS/Javascript',
                'https://www.escritorioloboadvocacia.com.br/',
            )}
             {renderCard(
                totalseg,
                'Total Seg',
                'Um dos Meus Primeiros Projetos utilizando APIs com Javascript/React.',
                'https://totalseges.com.br/#/',
            )}
             {renderCard(
                vec,
                'V&C',
                'Um dos Meus Primeiros Projetos utilizando Typescript React.',
                'https://vecedutec.com.br/',
            )}
        </div>
    )
}

export default Works;