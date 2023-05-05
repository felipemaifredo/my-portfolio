export const changeTextsWorksBR = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'Sobre';
      TextsMenu[2].innerText = 'Habilidades';
      TextsMenu[3].innerText = 'Projetos';
      TextsMenu[4].innerText = 'Contato';
    };
  };
  
  export const changeTextsWorksUS = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'About';
      TextsMenu[2].innerText = 'Skills';
      TextsMenu[3].innerText = 'Projects';
      TextsMenu[4].innerText = 'Contact';  
    }
  };