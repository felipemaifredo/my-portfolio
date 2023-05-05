
import './works-style.css'
import { AiOutlineEye } from "react-icons/ai";

import BrusunImg from '../../assets/works/brusun.png';
import LoboAdvImg from '../../assets/works/loboadv.png';

const Works = () => {

    const renderCard = (imagem, tittle, text, linkProject) => {
        return (
        <div className='card-item'>
            <div className='img-box'>
              <img src={imagem} alt='Imagem do Trabalho' />
            </div>
            <div className='title-box'>
              <h2 className='texts-works'>{tittle}</h2>
            </div>
            <div className='text-box'>
              <p className='texts-works'> {text} </p>
            </div>
            <div className='btn-box'>
              <a href={linkProject} target='_blanck' rel="noreferrer"> <AiOutlineEye /> </a>
            </div>
          </div>
      )}

    return (
        <div id="works">

            {renderCard(
                LoboAdvImg,
                'Lobo Advocacia',
                'Meu Segundo projeto real utilizando HTML, CSS e Javascript',
                'https://www.escritorioloboadvocacia.com.br/'
            )}
            
            {renderCard(
                BrusunImg,
                'Brusun Energia Solar',
                'Meu Primeiro projeto real utilizando HTML, CSS e Javascript',
                'https://www.brusun.com.br/'
            )}
        </div>
    )
}

export default Works;