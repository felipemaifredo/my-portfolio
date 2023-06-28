//Assets
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

//Imports
import './Skills-style.css';
import { useEffect } from "react";

//Components/Sections

function Skills() {

    useEffect(() => {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      };
      scrollToTop();
    });

    const RenderItemSkill = (image, tittle) => {
      return (
          <p> <span> {image} </span> {tittle} </p>
      )
    }

    const RenderItemSkills = ( image, tittle, text1, text2, text3 ) => {
      return (
        <div className='card-sec-skills'>
              <div className='img-box-sec-skills'> {image} </div>
              <div className="texts-box-sec-skills">
                <h3 className="texts-skills"> {tittle} </h3>
                <p className="texts-skills"> {text1} </p>
                { text2 ? <p className="texts-skills"> {text2} </p> : '' }
                { text3 ? <p className="texts-skills"> {text3} </p> : '' }
              </div>
        </div>
      )
    }

    return (
      <section id='Skills' className="Section">
        <div className='box-sec-skills'>
          <div className='top-box-sec-skills'>
            {RenderItemSkills( <AiFillHtml5 />, 'HTML 5 e CSS 3', 'Responsividade', 'Acessibilidade', 'Semântica')}
            {RenderItemSkills(<SiJavascript />, 'Javascript', 'ES6', RenderItemSkill(<SiTypescript />, 'Typescript'))}
            {RenderItemSkills( <BsGit />, 'Git', 'Controle e versionamento de códigos' )}
            {RenderItemSkills( <FaReact />, 'ReactJS', 'Framework Front-End', RenderItemSkill(<TbBrandNextjs />, 'NextJS'))}
          </div>
          <div className='botton-box-sec-skills'>
            {RenderItemSkills( <FaNodeJs />, 'NodeJS', 'Framework Back-End' )}
            {RenderItemSkills( <FaJava />, 'Java', 'Linguagem Back-End', RenderItemSkill(<SiSpringboot />, 'Springboot') )}
            {RenderItemSkills( <BsDatabaseAdd />, 'Bancos de Dados', RenderItemSkill(<GrMysql />, 'SQL'), RenderItemSkill(<DiMongodb />, 'MongoDB'), RenderItemSkill(<SiFirebase />, 'FireBase'))}
            <div className='card-sec-skills'>
              <h3 className="texts-skills">Outras Tecnologias</h3>
              {RenderItemSkill(<SiSass />, 'SASS')}
              {RenderItemSkill(<SiTailwindcss />, 'Tailwind')}
              {RenderItemSkill(<FaDocker />, 'Docker')}
            </div>
          </div>
        </div>
      </section>
    );
}
  
export default Skills;