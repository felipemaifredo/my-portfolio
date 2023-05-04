export const changeTextsProjectsBR = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'Sobre';
      TextsMenu[2].innerText = 'Habilidades';
      TextsMenu[3].innerText = 'Projetos';
      TextsMenu[4].innerText = 'Contato';
    };
/*
    let TextsProjects = document.querySelectorAll('.texts-projects');
    if (TextsProjects) {
        TextsProjects[0].innerText = 'Página de Projetos';
    }
    */
  };
  
  export const changeTextsProjectsUS = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'About';
      TextsMenu[2].innerText = 'Skills';
      TextsMenu[3].innerText = 'Projects';
      TextsMenu[4].innerText = 'Contact';  
    }
/*
    let TextsProjects = document.querySelectorAll('.texts-projects');
    if (TextsProjects) {
        TextsProjects[0].innerText = 'Project Pages';
    }*/
  };