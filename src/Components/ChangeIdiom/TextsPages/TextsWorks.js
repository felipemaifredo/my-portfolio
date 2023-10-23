export const changeTextsWorksBR = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'Sobre';
      TextsMenu[2].innerText = 'Habilidades';
      TextsMenu[3].innerText = 'Projetos';
      TextsMenu[4].innerText = 'Contato';
    };

    let TextsWorks = document.querySelectorAll('.texts-works');
    if (TextsWorks) {
      TextsWorks[0].innerText = 'Brusun';
      TextsWorks[1].innerText = 'Um dos Meus Primeiros Projetos utilizando HTML/CSS/Javascript';
      TextsWorks[2].innerText = 'Lobo Advocacia';
      TextsWorks[3].innerText = 'Um dos Meus Primeiros Projetos utilizando HTML/CSS/Javascript';
      TextsWorks[4].innerText = 'Total Seg';
      TextsWorks[5].innerText = 'Um dos Meus Primeiros Projetos utilizando APIs com Javascript/React.';
      TextsWorks[6].innerText = 'V&C';
      TextsWorks[7].innerText = 'Um dos Meus Primeiros Projetos utilizando Typescript React.';
    };
  };
  
  export const changeTextsWorksUS = () => {
    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'About';
      TextsMenu[2].innerText = 'Skills';
      TextsMenu[3].innerText = 'Projects';
      TextsMenu[4].innerText = 'Contact'; 
    };

    let TextsWorks = document.querySelectorAll('.texts-works');
    if (TextsWorks) {
      TextsWorks[0].innerText = 'Brusun';
      TextsWorks[1].innerText = 'One of My First Projects using HTML/CSS/Javascript';
      TextsWorks[2].innerText = 'Lobo Advocacia';
      TextsWorks[3].innerText = 'One of My First Projects using HTML/CSS/Javascript';
      TextsWorks[4].innerText = 'Total Seg';
      TextsWorks[5].innerText = 'One of My First Projects using APIs with Javascript/React.';
      TextsWorks[6].innerText = 'V&C';
      TextsWorks[7].innerText = 'One of My First Projects using Typescript React.';
    };
  };