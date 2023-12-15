//Imports
import './Styles/presentation.style.css';
import Observer from '../Components/Observer/observer';
import { useEffect } from 'react';

import MatrixRain from '../Components/MatrixRain';
import BgMouseAnimation from '../Components/Background_mouse_animation/bgMouseAnimation';

const Presentation = () => {
    const bgAnimations = [<MatrixRain />, <BgMouseAnimation />];

    function selectBg() {
        let randonNumber = Math.floor(Math.random() * bgAnimations.length);
        return bgAnimations[randonNumber];
    }

    useEffect(() => {
        let spans = document.querySelectorAll('span.span-letter');
        function addEvent() {
            spans.forEach(function(span) {
                span.addEventListener("click", minhaFuncao);
                span.addEventListener("mouseenter", minhaFuncao);
            });
        } addEvent();
        // Limpeza ao desmontar o componente
        return () => {
            spans.forEach(function(span) {
                span.removeEventListener("click", minhaFuncao);
                span.removeEventListener("mouseenter", minhaFuncao);
            });
        };
    }, []); // Adicione as dependências necessárias

    function minhaFuncao(event) {
        let span = event.target;
        span.classList.add('span-clicked'); 
        span.removeEventListener("click", minhaFuncao);
    
        setTimeout(() => {
            span.classList.remove('span-clicked');
            span.addEventListener("click", minhaFuncao);
        }, 501);
    }

    return (
        <section id='presentation'>
            <div className='hi-box'>
                <h1>
                    <span className='span-1 texts-presentation'>Oi!</span>
                    <span className='span-2 texts-presentation'>Sou o Felipe,</span>
                    <span className='span-box-options texts-presentation'> Desenvolvedor FullStack </span>
                </h1>
                <Observer threshold={[0, 0.5, 1]}>  
                    <div class="animation-letter-box init-hidden" aria-hidden="true">
                        <span class="span-container content1">
                            <span class="span-letter">O</span>
                            <span class="span-letter">i</span>
                            <span class="span-letter">!</span>
                        </span>
                        <span class="span-container content2">
                            <span class="span-letter">S</span>
                            <span class="span-letter">o</span>
                            <span class="span-letter">u</span>
                            <span class="span-space"></span>
                            <span class="span-letter">o</span>
                            <span class="span-space"></span>
                            <span class="span-letter">F</span>
                            <span class="span-letter">e</span>
                            <span class="span-letter">l</span>
                            <span class="span-letter">i</span>
                            <span class="span-letter">p</span>
                            <span class="span-letter">e</span>
                        </span>
                        <span class="span-container content3">
                            <span class="span-letter">D</span>
                            <span class="span-letter">e</span>
                            <span class="span-letter">s</span>
                            <span class="span-letter">e</span>
                            <span class="span-letter">n</span>
                            <span class="span-letter">v</span>
                            <span class="span-letter">o</span>
                            <span class="span-letter">l</span>
                            <span class="span-letter">v</span>
                            <span class="span-letter">e</span>
                            <span class="span-letter">d</span>
                            <span class="span-letter">o</span>
                            <span class="span-letter">r</span>
                            <span class="span-space"></span>
                            <span class="span-letter">F</span>
                            <span class="span-letter">u</span>
                            <span class="span-letter">l</span>
                            <span class="span-letter">l</span>
                            <span class="span-space"></span>
                            <span class="span-letter">S</span>
                            <span class="span-letter">t</span>
                            <span class="span-letter">a</span>
                            <span class="span-letter">c</span>
                            <span class="span-letter">k</span>
                        </span>
                    </div>
                </Observer>
            </div>
            <div className='aside-animation'>
               {selectBg()}
            </div>
        </section>
    )
}

export default Presentation;