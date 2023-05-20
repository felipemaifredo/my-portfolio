//Assets
import imgFelipe from '../../assets/imgs/felipe1.JPG';
//Imports
import './Section1-style.css';
import { useState, useEffect } from 'react';
//Components/Sections
import MatrixRain from '../../components/MatrixRain';
import MouseAnimation1 from '../../components/Backgroundanimation1/Backgroundanimation1';
import BackAnimation2 from '../../components/BackgroundAnimation2/Backgroundanimation2';
function Section1() {
    const [count, setCount] = useState(0);
    const Backgrounds = [ <MatrixRain />, <MouseAnimation1 />, <BackAnimation2 /> ]

    function getBackground() {
      let RandonNumber = Math.floor(Math.random() * Backgrounds.length);
      return RandonNumber;
    }

    const RenderBackground = () => {
      let RandonNumber = getBackground();
      return Backgrounds[RandonNumber];
    }

    useEffect(() => {
      const easterEGG = () => {
        setCount(count + 1);
        if (count >= 5) {
          let contentOcult = document.querySelector('.content-ocult');
          contentOcult.classList.add('content-revel');
        }
      };

      const spanElement = document.querySelector('h1');
      if (spanElement) {
        spanElement.addEventListener('click', easterEGG);
      }

      return () => {
        if (spanElement) {
          spanElement.removeEventListener('click', easterEGG);
        }
      };
    }, [count]);

    return (
      <section id='sec1' className="Section">
        <div className='left-side-sec1'>
          <h1>
            <span className='texts-sec1 text-h1'>Olá!</span>
            <span className='texts-sec1 text-h1'>Sou o Felipe,</span>
            <span className='texts-sec1 text-h1'>Desenvolvedor FullStack.</span>
          </h1>
            <span className='content-ocult texts-sec1'>Porém mais front-end :P</span>
        </div>
        <div className='right-side-sec1'>
          <img src={imgFelipe} alt='Imagem do Felipe' />
          <h2>
            <span className='texts-sec1'> Portfolio e Trabalhos </span>
            <span className='texts-sec1'> de Felipe Maifredo </span>
          </h2>
          {RenderBackground()}
        </div>
      </section>
    );
}
  
export default Section1;