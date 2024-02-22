import React from 'react';
import "./intro.css";
import btnImg from '../../assets/hire.png';
import bg from '../../assets/bg.webp';
import {Link} from 'react-scroll'



const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'> I am <span className='introName'> Nikhita</span><br/>Website Designer</span>
            <p className='introPara'> I am a third year college student with web development experience</p>
            <Link> <button className='btn'><img src={btnImg}alt="Hire Me" />Hire Me</button> </Link>
        </div>
        <img src={bg} alt="" className="bg"/>
    </section>

  )
}

export default Intro;