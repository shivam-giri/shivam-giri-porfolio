import React from "react";
import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () =>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mgrvvin', 'template_zmqrdbb', form.current, '22ZVDOWKVD__ZeU7I')
    e.target.reset();  
    // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return(
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
             <i class="fa fa-duotone fa-envelope"></i>
             <h4>Email</h4>
             <h5>shivamgiri.bit@gmail.com</h5>
             <a href="mailto:shivamgiri.bit@gmail.com">Send a Message</a>
          </article>
          {/* <article className="contact__option">
             <i class="fa fa-brands fa-facebook"></i>
             <h4>Messanger</h4>
             <h5>ffshdf@gmail.com</h5>
             <a href="https://www.facebook.com/shivam.giri.52/" target="_blank">Send a Message</a>
          </article> */}
          <article className="contact__option">
             <i class="fa fab fa-whatsapp"></i>
             <h4>Whatsapp</h4>
             <h5>+91-8787213953</h5>
             <a href="https://api.whatsapp.com/send?phone=918787213953">Send a Message</a>
          </article>
        </div>
          {/* end of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="eame" placeholder="Your Email" required />
          <textarea type="text" name="message" rows="7" placeholder="Your Message" required />
          {/* <button className="btn primary-btn">Send Message</button> */}
          <div className="cta-wrapper luxury">
             <button href="#contac" className="glow-on-hover" target="_blank" rel="noreferrer">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;