export const changeTextsHomeBR = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'Sobre';
      TextsMenu[2].innerText = 'Habilidades';
      TextsMenu[3].innerText = 'Projetos';
      TextsMenu[4].innerText = 'Contato';
    };
    
    let TextsAbout = document.querySelectorAll('.texts-about');
    if (TextsAbout) {
      TextsAbout[0].innerText = 'Olá Mundo!';
    }

    let TextsSkills = document.querySelectorAll('.texts-skills');
    if (TextsSkills) {
      TextsSkills[0].innerText = 'Olá Mundo!';
    }

    let TextsProjects = document.querySelectorAll('.texts-projects');
    if (TextsProjects) {
      TextsProjects[0].innerText = 'Olá Mundo!';
    }

    let TextsContact = document.querySelectorAll('.texts-contact');
    if (TextsContact) {
      TextsContact[0].innerText = 'Olá Mundo!';
    }
  };
  
  export const changeTextsHomeUS = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'About';
      TextsMenu[2].innerText = 'Skills';
      TextsMenu[3].innerText = 'Projects';
      TextsMenu[4].innerText = 'Contact';  
    }

    let TextsAbout = document.querySelectorAll('.texts-about');
    if (TextsAbout) {
      TextsAbout[0].innerText = 'Hello World!';
    }

    let TextsSkills = document.querySelectorAll('.texts-skills');
    if (TextsSkills) {
      TextsSkills[0].innerText = 'Hello World!';
    }

    let TextsProjects = document.querySelectorAll('.texts-projects');
    if (TextsProjects) {
      TextsProjects[0].innerText = 'Hello World!';
    }

    let TextsContact = document.querySelectorAll('.texts-contact');
    if (TextsContact) {
      TextsContact[0].innerText = 'Hello World!';
    }
  };