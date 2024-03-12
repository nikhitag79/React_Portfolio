import React from 'react';
import './skills.css';
import app from '../../assets/app.png';
import school from '../../assets/school.jpeg';
import website from '../../assets/website.avif';

const Skills = () => {
    return (
      <section id ='skills'>
        <span className='skillsTitle'>
           What I Do? 
        </span>
        <span className='skillsDescription'>
           UVA student studying CS with research
        </span>
        <div className = "skillBars"> </div>
            <div className="skillBar">
                <img src={school} alt="school" className='skillBarImg' />
                <div className = "skillBarText">
                    <h2>School</h2>
                    <p>demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={app} alt="app" className='skillBarImg' />
                <div className = "skillBarText">
                    <h2>App Development</h2>
                    <p>demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={website} alt="website" className='skillBarImg' />
                <div className = "skillBarText">
                    <h2>Website Development</h2>
                    <p>demo text</p>
                </div>
            </div>
        </section>
    );
  }
  export default Skills;