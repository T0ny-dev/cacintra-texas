import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.css";


function Form () {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_viof63r','template_3ertbcr', form.current, 'Hvf7aCP4NIoQRZCb-')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  form.current.reset();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="nombre" name='nombre'/>
        <input type="text" placeholder="empresa" name='empresa'/>
        <input type="tel" placeholder="telefono" name='telefono'/>
        <input type="email" name='email' placeholder='email'/>
        <textarea name='mensaje' id="" cols="60" rows="10" placeholder="mensaje"></textarea>
        <button type="submit" >Enviar</button>
      </form>
    </div>
  )
}

export default Form;