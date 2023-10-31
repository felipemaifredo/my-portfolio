//Imports
import './navbar.style.css'
import Scrollspy from 'react-scrollspy';
import { Link, useLocation } from 'react-router-dom';
import PageTransition from '../PageTransition/PageTransition'
import { useState } from 'react';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [menuActive, setMenuActive] = useState(false)

    const handleLinkClick = (e) => {
        e.preventDefault();
        setMenuActive(false);
        let element = e.target.getAttribute('href');
        let toSection = document.querySelector(element).offsetTop;
    
        window.scroll({
            top: toSection,
            behavior: "smooth",
        });
    };

    const handleClickFuncs = () => {
        PageTransition();
        setMenuActive(false);
    }

    const renderLink = (text, link) => {
        return (
            isHome ? (
                <a href={link} className="navigation-link texts-nav texts-nav" onClick={handleLinkClick}> {text} </a>
            ) : (
                <Link to="/" className='texts-nav texts-nav' onClick={handleClickFuncs}> {text} </Link>
            )
        );
    };

    const toggleMenu = () => {
        menuActive ? setMenuActive(false) : setMenuActive(true);
    }

    return (
        <nav id='navbar' className={menuActive && 'navbar-active'}>
            <button id='btn-menu' onClick={toggleMenu}>
                <span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
            </button>
            <Scrollspy items={['presentation', 'about', 'skills', 'projects', 'contact' ]} currentClassName="destaque-nav" offset={-300} className={'nav-menu'}>
                <li className='nav-menu-itens'>
                    {renderLink("Home", "#presentation" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Sobre", "#about" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Habilidades", "#skills" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Projetos", "#projects" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Contato", "#contact" )}
                </li>
            </Scrollspy>
        </nav>
    )
};

export default Navbar;