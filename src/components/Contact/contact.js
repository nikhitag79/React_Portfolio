import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

import './contact.css'


const Contact = () => {
    return(
    <section id="contactPage" >
        <div id = "clients">
        </div>
        <div id ="contact">
            <h1 className="contactPageTitle">Contact Me</h1>

            <span className="contactDes">
                Please fill out the form for further inquiries
            </span>
            <form className='contactForm'>
                <input type ="text" className="name" placeholder ="Your Name"/>
                <input type ="email" className="email" placeholder ="Your Email"/>
                <textarea className="msg" rows="5" placeholder="Your Message"></textarea>
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