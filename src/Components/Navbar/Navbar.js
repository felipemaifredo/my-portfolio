//Imports
import './navbar.style.css'
import Scrollspy from 'react-scrollspy';
import { Link, useLocation } from 'react-router-dom';
import PageTransition from '../PageTransition/PageTransition'

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleLinkClick = (e) => {
        e.preventDefault();
        let element = e.target.getAttribute('href');
        let toSection = document.querySelector(element).offsetTop;
    
        window.scroll({
            top: toSection,
            behavior: "smooth",
        });
    };

    const handleClickFuncs = () => {
        PageTransition();
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

    return (
        <nav id='navbar'>
            <Scrollspy items={['presentation', 'about', 'skills', 'projects', 'contact' ]} currentClassName="destaque-nav" offset={-300} className='nav-menu'>
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