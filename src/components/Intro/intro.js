import React, { useEffect } from 'react';
import "./intro.css";
import btnImg from '../../assets/hire.png';
import headshot from '../../assets/headshot.jpg';
import uva from '../../assets/uva.png';
import wellsfargo from '../../assets/wellsfargo.png';
import hawkeye from '../../assets/hawkeye.jpeg';
import flood from '../../assets/flood.png';

import { Link } from 'react-scroll';

const Intro = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
      const initialPositions = [
        { top: 18, right: 20 },
        { top: 35, right: 22 },
        { top: 40, right: 10},
        { top: 52, right: 20 },
        { top: 22, right: 10 }
      ];
      const { top, right } = initialPositions[index];
      circle.style.top = `${top}vh`;
      circle.style.right = `${right}vw`;
      circle.style.animation = `move${index + 1} 5s infinite alternate`;
    });
  }, []);

  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'> I am <span className='introName'> Nikhita</span><br />Software Developer</span>
        <p className='introPara'> I am a third year college student at the University of Virginia, <br />  studying Computer Science. 
        I am a software developer with 
        <br />  experience in website development and machine learning research. </p>


      
      </div>
      <div className="circles">
        <img src={wellsfargo} alt="Circle 1" className="circle circle1" />
        <img src={uva} alt="Circle 2" className="circle circle2" />
        <img src={headshot} alt="Circle 3" className="circle circle3" />
        <img src={hawkeye} alt="Circle 4" className="circle circle4" />
        <img src={flood} alt="Circle 5" className="circle circle5" />
      </div>
    </section>
  )
}

export default Intro;
