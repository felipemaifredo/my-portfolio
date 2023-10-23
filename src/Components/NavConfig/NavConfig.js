//Imports
import './navconfig.style.css';
import { BsFillGearFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

//Components
import ChangeIdiom from '../ChangeIdiom/ChangeIdiom';

const NavConfig = () => {
    const [ navConfig, setNavConfig] = useState(null);
    
    useEffect(() => {
        setNavConfig(document.querySelector('div#navconfig'))
    }, [setNavConfig]);

    const handlConfigOn = () => {
        navConfig.classList.toggle('configon');
    }


    return (
        <div id='navconfig'>
            <div className='box-btn'>
                <button className='navconfig-button' onClick={handlConfigOn}> <BsFillGearFill /> </button>
            </div>
            <div className='menu-flex'>
                <ChangeIdiom />
            </div>
        </div>
    )
}

export default NavConfig;