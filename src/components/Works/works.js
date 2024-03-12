import React from 'react';
import "./works.css";
import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';

const Works = () => {
    return (
      <section id="works">
        <h2 className ="worksTitle"> My Portfolio </h2>
        <span className='workDesc'> Here are the projects I have created</span>
        <div className ="worksImgs">
            <img src={portfolio1} alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src ={portfolio3}alt="" className="worksImg" />
            <img src={portfolio1}alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src={portfolio3} alt="" className="worksImg" />


        </div>
        <button className="workBtn"> See More </button>
      </section>
  
    );
  }
  
  export default Works;