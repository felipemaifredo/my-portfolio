//Imports
import './Styles/skills.style.css'
import Observer from '../Components/Observer/observer';
import { useState, useEffect } from 'react';

//Assets
import Logo1 from '../Assets/Logos/1.png';
import Logo2 from '../Assets/Logos/2.png';
import Logo3 from '../Assets/Logos/3.png';
import Logo4 from '../Assets/Logos/4.png';
import Logo5 from '../Assets/Logos/5.png';
import Logo6 from '../Assets/Logos/6.png';
//import Logo7 from '../Assets/Logos/7.png';
import Logo8 from '../Assets/Logos/8.png';
import Logo9 from '../Assets/Logos/9.png';
//import Logo10 from '../Assets/Logos/10.png';
import Logo11 from '../Assets/Logos/11.png';
import Logo12 from '../Assets/Logos/12.png';
import Logo13 from '../Assets/Logos/13.png';
import Logo14 from '../Assets/Logos/14.png';
import Logo15 from '../Assets/Logos/15.png';
import Logo16 from '../Assets/Logos/16.png';
import Logo18 from '../Assets/Logos/18.png';
import Logo19 from '../Assets/Logos/19.png';
import Logo20 from '../Assets/Logos/20.png';

const Skills = () => {
    const [elementEXP, setElementEXP] = useState();
    const [imgEXP, setImgEXP] = useState();
    const [textEXP, setTextEXP] = useState('');
    const [tabInEXP, setTabInEXP] = useState('');
    const [ElementEXPClassName, setElementEXPClassName] = useState();
    const [widthAct, setWidthAct] = useState('');
    const [heightAct, setHeightAct ] = useState('');
    const [titleEXP, setTitleEXP] = useState('');
    
    useEffect(() => {
        setElementEXP(document.querySelector('#elementEXP'));
    }, [elementEXP]);

    const createCardSkill = ({ img, text, index, tabIn, tabInEXP, titleEXP }) => {
        const handleMouseEnter = () => {
            renderElementExp(img, text, tabInEXP, titleEXP );
        };

        const handleMouseLeave = () => {
            setHeightAct(`${elementEXP.offsetHeight}px`);
            setWidthAct(`${elementEXP.offsetWidth}px`);
            desrenderElementExp();
        };
    
        return (
            <Observer threshold={[0, 0.5, 1]}>  
                <div key={index} tabIndex={tabIn} className='card-skill init-hidden' onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onFocus={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <img src={img} alt='Skill' />
                </div>
            </Observer>
        );
    };

    const renderElementExp = (img, text, tabInEXP, titleEXP) => {
        setTextEXP(text)
        setImgEXP(img)
        setTabInEXP(tabInEXP)
        setTitleEXP(titleEXP);
        setElementEXPClassName('elementEXP-active');
    }

    const desrenderElementExp = () => {
        setElementEXPClassName('elementEXP-desactive');
    };

    const skillsData = [
        { img: Logo1, text: 'Possuo grandes conhecimentos HTML5, com um foco na semântica e acessibilidade. Utilizo tags adequadas e estruturas organizadas para criar páginas web com significado claro. Além disso, implemento práticas acessíveis, como descrições de imagens e navegação por teclado, buscando proporcionar uma experiência inclusiva para todos os usuários. Meu objetivo é criar sites eficientes, visualmente agradáveis e com excelente usabilidade, priorizando a experiência do usuário e a inclusão de todos os visitantes.', tabIn: 7, tabInEXP: 8, titleEXP:'HTML 5' },

        { img: Logo2, text: 'Utilizo técnicas avançadas de CSS3 para desenvolver layouts flexíveis que se adaptam perfeitamente a diferentes dispositivos, garantindo uma experiência consistente e agradável para os usuários. Além disso, aplico animações e transições suaves para criar interações cativantes, proporcionando uma experiência visualmente deslumbrante e funcional. busco oferecer resultados incríveis, combinando responsividade, usabilidade, beleza e animações para proporcionar experiências de usuário excepcionais.', abIn: 9, tabInEXP: 10, titleEXP:'CSS 3' },

        { img: Logo3, text: 'Tenho um conhecimento avançado em JavaScript e suas funcionalidades avançadas. Minha proficiência em JavaScript me permite criar soluções robustas e eficientes, utilizando recursos como arrow functions, classes, destructuring, async/await e utilização de APIs.  Com esse conhecimento aprofundado em JavaScript, sou capaz de desenvolver aplicações sofisticadas e de alto desempenho, implementando lógica complexa e interações dinâmicas.', tabIn: 11, tabInEXP: 12, titleEXP:'Javascript' },

        { img: Logo4, text: 'Possuo um conhecimento avançado em TypeScript, uma linguagem de programação que estende o JavaScript com recursos de tipagem estática. Com a utilização do TypeScript, posso desenvolver aplicações mais robustas, detectar erros em tempo de desenvolvimento e criar código estruturado e legível. Minha expertise em TypeScript me permite criar soluções de software de alta qualidade, com maior confiabilidade e eficiência no desenvolvimento.', tabIn: 13, tabInEXP: 14, titleEXP:'Typescript' },

        { img: Logo5, text: 'Possuo um conhecimento avançado em ReactJS, com o ReactJS, posso criar componentes reutilizáveis, que facilitam a construção de interfaces complexas e a manutenção do código. O ReactJS oferece um desempenho eficiente e atualizações rápidas, proporcionando uma experiência de usuário fluida. Sou capaz de desenvolver aplicações web modernas e escaláveis, proporcionando interfaces de usuário dinâmicas e responsivas.', nSkill: 100, tabIn: 15, tabInEXP: 16, titleEXP:'ReactJS' },
        
        { img: Logo6, text: 'Eu possuo um conhecimento especializado em Next.js, um framework de desenvolvimento React que permite a construção de aplicativos web modernos e escaláveis. Com o Next.js, sou capaz de criar interfaces de usuário interativas, utilizando a renderização do lado do servidor (SSR) e a renderização do lado do cliente (CSR) de forma otimizada. Posso desenvolver aplicações web de alto desempenho, com melhor SEO, velocidade e experiência do usuário, proporcionando uma base sólida para o desenvolvimento de aplicações modernas e de alta qualidade.', tabIn: 17, tabInEXP: 18, titleEXP:'Next.js' },
        
        { img: Logo11, text: 'Eu possuo um conhecimento sólido em Node.js, uma plataforma de desenvolvimento JavaScript que permite a criação de aplicativos escaláveis e de alto desempenho do lado do servidor. Com o Node.js, sou capaz de construir servidores web eficientes, APIs RESTful e outras aplicações de rede. Utilizando o modelo assíncrono e não bloqueante do Node.js, posso lidar com um grande volume de solicitações de forma eficiente e realizar operações de I/O de maneira eficaz. ', tabIn: 19, tabInEXP: 20, titleEXP:'NodeJS' },
        
        { img: Logo19, text: 'Eu possuo conhecimento em NestJS, um framework de desenvolvimento para Node.js que permite a criação de aplicações escaláveis e eficientes. Com o Nest.js, posso utilizar conceitos como injeção de dependências, módulos e decoradores para criar uma estrutura organizada e modularizada. Isso facilita o desenvolvimento, a manutenção e a escalabilidade dos projetos em Node.js, permitindo a criação de APIs RESTful poderosas e de alta qualidade.', tabIn: 21, tabInEXP: 22, titleEXP:'NestJS' },

        { img: Logo20, text: 'Eu possuo um conhecimento especializado em Docker, uma plataforma de virtualização de contêineres que simplifica e agiliza o processo de desenvolvimento, implantação e execução de aplicativos. Com o Docker, sou capaz de criar contêineres leves e isolados, que empacotam todos os componentes necessários para o funcionamento de um aplicativo, como bibliotecas, dependências e configurações. Isso permite uma implantação consistente em diferentes ambientes, facilita a escalabilidade e melhora a eficiência dos recursos.', tabIn: 23, tabInEXP: 24, titleEXP:'React Native' },

        { img: Logo18, text: 'Eu possuo um conhecimento especializado em Docker, uma plataforma de virtualização de contêineres que simplifica e agiliza o processo de desenvolvimento, implantação e execução de aplicativos. Com o Docker, sou capaz de criar contêineres leves e isolados, que empacotam todos os componentes necessários para o funcionamento de um aplicativo, como bibliotecas, dependências e configurações. Isso permite uma implantação consistente em diferentes ambientes, facilita a escalabilidade e melhora a eficiência dos recursos.', nSkill: 100, tabIn: 25, tabInEXP: 26, titleEXP:'ElectronJS' },      
        
        { img: Logo12, text: 'Possuo um conhecimento abrangente em MySQL, sou capaz de armazenar, gerenciar e consultar dados de forma eficiente e confiável. Tenho a habilidade de projetar e otimizar esquemas de banco de dados, executar consultas complexas e garantir a integridade e segurança dos dados, proporcionando soluções de armazenamento de dados confiáveis e eficazes para atender às necessidades dos meus projetos.', tabIn: 27, tabInEXP: 28, titleEXP:'MySQL' },
        
        { img: Logo13, text: 'Possuo um conhecimento avançado em Firebase, uma plataforma de desenvolvimento de aplicativos em nuvem que oferece uma variedade de serviços para agilizar o desenvolvimento e o gerenciamento de aplicativos. Com o Firebase, sou capaz de construir aplicativos web e mobile escaláveis e de alta qualidade, além disso, o Firebase possui uma integração perfeita com outras tecnologias, como o JavaScript, permitindo uma fácil implementação e uma experiência de desenvolvimento suave.', tabIn: 29, tabInEXP: 30, titleEXP:'Firebase' },
        
        { img: Logo14, text: 'Possuo um conhecimentos em MongoDB, um banco de dados NoSQL altamente flexível e escalável. Com o MongoDB, sou capaz de armazenar e gerenciar grandes volumes de dados de forma eficiente. Posso projetar e implementar esquemas de dados flexíveis, consultas complexas e agregações poderosas, fornecendo soluções de armazenamento de dados eficazes e adaptáveis para tender às necessidades dos meus projetos.', tabIn: 31, tabInEXP: 32, titleEXP:'MongoDB' },

        { img: Logo8, text: 'Eu possuo um amplo conhecimento em Git, um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software. Com o Git, sou capaz de gerenciar eficientemente o histórico de alterações em projetos, controlar diferentes versões do código-fonte e facilitar a colaboração em equipe.', tabIn: 33, tabInEXP: 34, titleEXP:'Git' },

        { img: Logo16, text: 'Eu possuo um conhecimento aprofundado em Sass, sou capaz de criar folhas de estilo CSS de forma modular e reutilizável, utilizando recursos como variáveis, aninhamento de seletores, mixins e importação de arquivos parciais. Essas funcionalidades do Sass me permitem escrever código CSS mais limpo, organizado e flexível, resultando em uma manutenção mais fácil e um desenvolvimento mais eficiente. ', tabIn: 35, tabInEXP: 36, titleEXP:'SASS' },

        { img: Logo9, text: 'Eu possuo um amplo conhecimento em Tailwind CSS, um framework de CSS utilitário que oferece uma abordagem única para a construção de interfaces de usuário responsivas e personalizáveis. posso criar estilos de forma rápida e eficiente, aproveitando sua ampla gama de classes utilitárias.', tabIn: 37, tabInEXP: 38, titleEXP:'Tailwind' },

        { img: Logo15, text: 'Eu possuo um conhecimento aprofundado em Bootstrap, um dos frameworks mais populares para o desenvolvimento de interfaces web responsivas. Com o Bootstrap, sou capaz de criar layouts flexíveis, utilizar componentes reutilizáveis e estilizar de forma consistente os elementos da interface.', tabIn: 39, tabInEXP: 40, titleEXP:'Bootstrap' },

    ];

    const renderSkills = () => {
        return skillsData.map((skill, index) =>
          createCardSkill({ ...skill, key: index })
        );
    };

    return (
        <section id='skills'>
            <Observer threshold={[0, 0.5, 1]}>  
                  <div className='init-hidden title-box-skills'>
                    <h2 tabIndex={4} className='texts-skills'>Habilidades</h2>
                    <p tabIndex={5} className='texts-skills'>Tecnologias que eu domino</p>
                  </div>
            </Observer>
            <div className='logos-box'>
                { renderSkills() }
            </div>
            <div id='elementEXP' className={ElementEXPClassName} style={{'--height-progress': heightAct, '--width-progress': widthAct }} >
                <img src={imgEXP} alt='Imagem' />
                <div className='text-box-exp'>
                    <h3>{titleEXP}</h3>
                    <p tabIndex={tabInEXP}>{textEXP}</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;