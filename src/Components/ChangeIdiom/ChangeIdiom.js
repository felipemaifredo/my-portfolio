import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './changeidiom.style.css';
//Assets
import BRIcon from '../../Assets/Icons/bra-icon.png';
import USIcon from '../../Assets/Icons/eua-icon.png';

//Funcs Idioms
import { changeTextsHomeBR, changeTextsHomeUS } from './TextsPages/TextsHome';
import { changeTextsProjectsBR, changeTextsProjectsUS } from './TextsPages/TextsProjects';
import { changeTextsLibraryBR, changeTextsLibraryUS } from './TextsPages/TextsLibrary';
import { changeTextsWorksBR, changeTextsWorksUS } from './TextsPages/TextsWorks';

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
      case '/projects':
          changeTextsProjectsBR();
        break;
      case '/library':
          changeTextsLibraryBR();
        break;
      case '/works':
          changeTextsWorksBR();
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
      case '/projects':
          changeTextsProjectsUS();
        break;
      case '/library':
          changeTextsLibraryUS();
        break;
      case '/works':
          changeTextsWorksUS();
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
