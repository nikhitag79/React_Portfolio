import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_e386g9m', 'template_avk82h8', form.current, {
            publicKey: 'H8eQlmJujvzU1IZHs',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email Sent!")
             },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
    <section id="contactPage" >
        <div id = "clients">
        </div>
        <div id ="contact">
            <h1 className="contactPageTitle">Contact Me</h1>

            <span className="contactDes">
                Please fill out the form for further inquiries
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type ="text" className="name" placeholder ="Your Name" name = "from_name"/>
                <input type ="email" className="email" placeholder ="Your Email" name = "from_email"/>
                <textarea className="msg" rows="5" placeholder="Your Message" name = "message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={github} alt="" className="link" />
                    <img src={linkedin} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>

    );
  }


  export default Contact;