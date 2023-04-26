//Assets
import imgFelipe from '../../assets/imgs/felipe1.JPG';
//Imports
import './Section1-style.css';
//Components/Sections
import MatrixRain from '../../components/MatrixRain';

function Section1() {
    return (
      <section id='sec1' className="Section">
        <div className='left-side-sec1'>
          <h1>
            <span className='texts-sec1'>Olá!</span>
            <span className='texts-sec1'>Sou o Felipe,</span>
            <span className='texts-sec1'>Desenvolvedor FullStack.</span>
          </h1>
        </div>
        <div className='right-side-sec1'>
          <img src={imgFelipe} alt='Imagem do Felipe' />
          <h2>
            <span className='texts-sec1'> Portfolio e Trabalhos </span>
            <span className='texts-sec1'> de Felipe Maifredo </span>
          </h2>
          <MatrixRain />
        </div>
      </section>
    );
}
  
export default Section1;