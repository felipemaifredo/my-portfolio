import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Assets
import BRIcon from '../assets/icons/bra-icon.png';
import USIcon from '../assets/icons/eua-icon.png';

//Funcs Idioms
import { changeTextsHomeBR, changeTextsHomeUS } from './TextsPages/TextsHome';
import { changeTextsProjectsBR, changeTextsProjectsUS } from './TextsPages/TextsProjects';

function ChangeIdiom() {
  const location = useLocation().pathname;
  const [isBr, setIsBr] = useState(localStorage.getItem('isBr') === 'true' );

  const toggleIdiom = () => {
    setIsBr((prevIsBr) => {
      localStorage.setItem('isBr', !prevIsBr);
      return !prevIsBr;
    });
  };

  useEffect(() => {
    verifyIdiom(isBr);
  });

  const verifyIdiom = (isBr) => {
    if (isBr) {
      changeTextsBR();
    } else {
      changeTextsUS();
    }
  };

  const changeTextsBR = () => {
    switch (location) {
      case '/':
          changeTextsHomeBR();
        break;
      case '/projects/tools':
          changeTextsProjectsBR();
        break;
    
      default:
        break;
    }
  };

  const changeTextsUS = () => {
    switch (location) {
      case '/':
          changeTextsHomeUS();
        break;
       case '/projects/tools':
          changeTextsProjectsUS();
        break;
    
      default:
        break;
    }
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
