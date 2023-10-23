//Assets

//Imports
import './Styles/About.style.css';
import Observer from '../Components/Observer/observer';

//Components/Sections

const About = () => {
    return (
      <section id='about'>
        <Observer threshold={[0, 0.5, 1]}>  
          <h2 className='init-hidden texts-about'>Algumas coisas sobre mim</h2>
        </Observer>
        <Observer threshold={[0, 0.5, 1]}>  
          <p className='init-hidden texts-about'>Há pouco mais de dois anos, mergulhei de cabeça no emocionante mundo da programação e desde então, essa jornada tem sido repleta de aprendizados e conquistas incríveis. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, onde tenho a oportunidade de aprofundar meus conhecimentos e aprimorar minhas habilidades técnicas.</p>
        </Observer>
        <Observer threshold={[0, 0.5, 1]}>  
          <p className='init-hidden texts-about'>Meu verdadeiro fascínio está no desenvolvimento em Javascript, que se tornou minha paixão e área de foco. Ao longo do tempo, explorei suas inúmeras possibilidades, desde aplicações web até soluções para dispositivos móveis e desktop. A cada projeto que me envolvo, sinto a empolgação e a motivação de criar algo inovador e funcional.</p>
        </Observer>
        <Observer threshold={[0, 0.5, 1]}>  
          <p className='init-hidden texts-about'>Neste portfolio, compartilho alguns dos meus projetos mais empolgantes, nos quais pude aplicar meus conhecimentos e criatividade. Cada linha de código representa meu empenho e dedicação para entregar soluções eficientes e elegantes.</p>
        </Observer>
        <Observer threshold={[0, 0.5, 1]}>  
          <p className='init-hidden texts-about'>Espero que este espaço seja uma porta de entrada para que você conheça mais sobre mim, meu trabalho e minha paixão pela programação. Sinta-se à vontade para explorar meus projetos e entrar em contato. Estou sempre aberto a novas oportunidades e parcerias emocionantes!</p>
        </Observer>
      </section>
    );
}
  
export default About;