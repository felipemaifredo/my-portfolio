//Imports
import './Navbar-style.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoFFD from '../../assets/icons/logo.png';

import Scrollspy from 'react-scrollspy';
//Components/Sections
import { ChangeTheme } from '../ChangeTheme';
import ChangeIdiom from '../ChangeIdiom';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
        setAria()
    };

    const setAria = () => {
        let btnMenu = document.querySelector('.btn-menu');
        let Nav = document.querySelector('nav');
        let isActive = Nav.classList.contains('nav-menu-active');
        
        btnMenu.setAttribute('aria-expanded', !isActive);
        if (isActive) {
            btnMenu.setAttribute('aria-label', 'Abrir Menu');
        } else {
            btnMenu.setAttribute('aria-label', 'Fechar Menu');
        }
    }

    const verifyMenu = () => {
        let btnMenu = document.querySelector('.btn-menu');
        let btnMenuStyles = getComputedStyle(btnMenu);
        let isFlex = btnMenuStyles.display === 'flex';
        if (isFlex) {
            toggleMenu();
        };
    };

    const renderLink = (text, link) => {
        return (
            isHome ? (
              <a href={link} className="navigation-link texts-nav" onClick={verifyMenu}> {text} </a>
            ) : (
              <Link to="/#Contact" className='texts-nav'> {text} </Link>
            )
        )
    };
    
    return (
        <nav className={`${isMenuActive ? 'nav-menu-active' : ''} ${isHome ? 'nav-menu-home' : ''}`}>
            <img href='#sec1' src={LogoFFD} className='img-nav' alt='Logo' /> 
            
            <button className='btn-menu' onClick={toggleMenu} aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                <span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
            </button>

            <Scrollspy items={['sec1', 'about', 'Skills', 'Projects', 'Contact' ]} currentClassName="destaque-nav" offset={-300} className='nav-menu'>
                <li className='nav-menu-itens'>
                    {renderLink("Home", "#sec1" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Sobre", "#about" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Habilidades", "#Skills" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Projetos", "#Projects" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Contato", "#Contact" )}
                </li>
            </Scrollspy>
            <ChangeIdiom />
            <ChangeTheme />
        </nav>
    )
}

export default Navbar;