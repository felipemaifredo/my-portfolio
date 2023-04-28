//Assets

//Imports
import './Contact-style.css';
import React, { useState } from 'react';

//Components/Sections
const btnSending = 'Enviando <span class="elemento"></span>';
const linkToFetch = "https://formsubmit.co/felipemaifredo@gmail.com"

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const sendEmail = (e) => {
      e.preventDefault();
      let formBtn = document.querySelector('button#btn-form')
      if ( !formData.name || !formData.email || !formData.message ) {
        formBtn.innerHTML = "Preecha Todos os campos acima";
        setTimeout( () => {
          formBtn.innerHTML = "Enviar";
        }, 5000);
      } else {
        formBtn.innerHTML = btnSending;
        fetch(linkToFetch, {
          method: "post",
          headers: { "Accept": "aplication/json", "Content-Type": "application/json" },
          body: JSON.stringify({ 
            _captcha: 'false',
            _subject: 'Novo Contato no Site!',
            Nome: formData.name,
            EmailWhatsapp: formData.email,
            Mensagem: formData.message
          })
        }).then(() => {
          formBtn.innerHTML = "Mensagem Enviada!";
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              message: ''
            });
            formBtn.innerHTML = 'Enviar';
          }, 5000);
        });
      };
    };

    return (
      <section id='Contact' className="Section">
        <div className='box-sec-contact'>
          <div className='texts-box-sec-contact'>
            <h2> Obrigado por chegar até aqui! </h2>
            <p> Me envie uma mensagem abaixo </p>
          </div>
          <form onSubmit={ sendEmail } id='form-contact'>
            <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='Nome' />
            <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Email ou Whatsapp' />
            <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder='Assunto'></textarea>
            <button type="submit" id='btn-form'> Enviar </button>
          </form>
          <div className='social-box-sec-contact'>
          </div>
        </div>
      </section>
    );
}
  
export default Contact;