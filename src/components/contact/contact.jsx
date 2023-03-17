import React ,{ useRef } from "react";
import emailjs from 'emailjs-com'
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ggofigl', 'template_auqm0w6', form.current, 'nAsUYNkvL0QWQB144')
    e.target.reset();
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contect-options">
          <article className="contact-option">
            <AiOutlineMail  className="contact-option-icons"/>
            <h4>Email</h4>
            <h5>manalamro538@gmail.com</h5>
            <a href="mailto:manalamro538@gmail.com" target="_parent">Send a massege</a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-option-icons"/>
            <h4>whatApp</h4>
            <h5>+972 59-550-9547</h5>
            <a href="https://api.whatsapp.com/send?phone=+97259-550-9547" target="_parent">Send a massege</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your full name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" row="7" placeholder="your massege" required></textarea>
          <button type="submit" className="btn btn-primary">Send massege</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
