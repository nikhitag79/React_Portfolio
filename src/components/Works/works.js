import React from 'react';
import "./works.css";
import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className='worksDesc'>Here are the projects I have created</span>
      <div className="worksImgs">
        <div className="worksImgContainer">
          <a href="https://devpost.com/software/greenway-yrlwif" target="_blank" rel="noopener noreferrer">
            <img src={portfolio1} alt="Portfolio 1" className="worksImg" />
            <div className="overlay">GreenWay</div>
          </a>
        </div>
        <div className="worksImgContainer">
          <a href="https://devpost.com/software/bettercart" target="_blank" rel="noopener noreferrer">
            <img src={portfolio2} alt="Portfolio 2" className="worksImg" />
            <div className="overlay">Better Cart</div>
          </a>
        </div>
        <div className="worksImgContainer">
          <a href="https://example3.com" target="_blank" rel="noopener noreferrer">
            <img src={portfolio3} alt="Portfolio 3" className="worksImg" />
            <div className="overlay">Tutor Me</div>
          </a>
        </div>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
