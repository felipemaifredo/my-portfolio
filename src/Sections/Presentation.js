//Imports
import './Styles/presentation.style.css';
import MatrixRain from '../Components/MatrixRain';
import Observer from '../Components/Observer/observer';

const Presentation = () => {
    return (
        <section id='presentation'>
            <div className='hi-box'>
                <Observer threshold={[0, 0.5, 1]}>
                    <h1 className='init-hidden'>
                        <span className='span-1 texts-presentation'>Oi!</span>
                        <span className='span-2 texts-presentation'>Sou o Felipe,</span>
                        <span className='span-box-options texts-presentation'> Desenvolvedor FullStack </span>
                    </h1>
                    </Observer>
                </div>
            <div className='aside-animation'>
               <MatrixRain />
            </div>
        </section>
    )
}

export default Presentation;