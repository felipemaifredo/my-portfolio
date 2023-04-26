import { useState, useEffect } from 'react';

import BRIcon from '../assets/icons/bra-icon.png';
import USIcon from '../assets/icons/eua-icon.png';

function ChangeIdiom() {
  const [isBr, setIsBr] = useState(localStorage.getItem('isBr') === 'true' );

  const toggleIdiom = () => {
    setIsBr((prevIsBr) => {
      localStorage.setItem('isBr', !prevIsBr);
      return !prevIsBr;
    });
  };

  useEffect(() => {
    verifyIdiom(isBr);
  }, [isBr]);

  const verifyIdiom = (isBr) => {
    if (isBr) {
      changeTextsBR();
    } else {
      changeTextsUS();
    }
  };

  const changeTextsBR = () => {
    
    let TextsMenu = document.querySelectorAll('.texts-nav');
    TextsMenu[1].innerText = 'Sobre';
    TextsMenu[2].innerText = 'Habilidades';
    TextsMenu[3].innerText = 'Projetos';
    TextsMenu[4].innerText = 'Contato';

    let TextsSec1 = document.querySelectorAll('.texts-sec1');
    TextsSec1[0].innerText = 'Olá Mundo!';
  };

  const changeTextsUS = () => {

    let TextsMenu = document.querySelectorAll('.texts-nav');
    TextsMenu[1].innerText = 'About';
    TextsMenu[2].innerText = 'Skills';
    TextsMenu[3].innerText = 'Projects';
    TextsMenu[4].innerText = 'Contact';

    let TextsSec1 = document.querySelectorAll('.texts-sec1');
    TextsSec1[0].innerText = 'Hello World!';
  };

  return (
    <div className='box-languages'>
      <button id='btn-language-pt' className={isBr ? 'language-active' : ''} onClick={toggleIdiom}>
        <img src={BRIcon} alt='Português' />
      </button>
      <button id='btn-language-us' className={!isBr ? 'language-active' : ''} onClick={toggleIdiom}>
        <img src={USIcon} alt='English' />
      </button>
    </div>
  );
}

export default ChangeIdiom;
