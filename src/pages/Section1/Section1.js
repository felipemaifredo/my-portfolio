//Assets
import imgFelipe from '../../assets/imgs/felipe1.JPG';
//Imports
import './Section1-style.css';
//Components/Sections
import MatrixRain from '../../components/MatrixRain';

function Section1() {
    const Backgrounds = [ <MatrixRain /> ]

    function getBackground() {
      let RandonNumber = Math.floor(Math.random() * Backgrounds.length);
      return RandonNumber;
    }

    const RenderBackground = () => {
      let RandonNumber = getBackground();
      return Backgrounds[RandonNumber];
    }
    
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