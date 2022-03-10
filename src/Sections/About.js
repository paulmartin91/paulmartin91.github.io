import React from 'react';
import './SectionsSCSS/About.scss';
import MyPhoto from './MyPhoto/Paul.jpeg';

const aboutMeText = () =>
    <p>
        In October 2017 I made my first "Hello World" appear and I've been obsessed with 
        writing code ever since. I currently divide my time between working as a Python Developer and
        as a Documentary Acquisitions Manager.
    <br /><br />
        I love programming, writing, designing and anything else that combines open ended challenges 
        with creative thinking. When I'm not writing code, I'm probably playing golf with my friends, 
        watching action movies or taking photos on my DSLR.
    </p>

const keySkills = () => 
    <div>
        <h1>Key Skills...</h1>
        <li>+ HTML/CSS</li>
        <li>+ Javascript</li>
        <li>+ React</li>
        <li>+ Node.js</li>
        <li>+ Express</li>
        <li>+ Mongo DB</li>
        <li>+ SQL</li>
        <li>+ Python</li>
        <li>+ PostgreSQL</li>
        <li>+ Web design</li>
        <li>+ Photoshop</li>
        <li>+ Photography</li>
        <li>+ Video Editing</li>
    </div>

const About = (props) => {
    return((props.compRender && props.sectionShow === "about") &&
        <section className='aboutHolder'>
            <div 
                className={(props.isMobile) ? 'mobileAbout' : 'about'}
            >
                <div className="aboutTop">
                    <img className="aboutPic" src={MyPhoto} alt="Paul"/>
                    <h1>←Paul Martin</h1>
                </div>
                {(props.isMobile) ? 
                //mobile
                <div className="aboutBottom">
                    <div className="aboutText">
                        <h1>About Me</h1>
                        {aboutMeText()}
                    </div>
                    <div className = "amSkills amSkillsHolder">
                        {keySkills()}
                    </div>
                </div>
                :
                //non Mobile 
                <div className="aboutBottom">
                    <div className = "amSkills">
                       {keySkills()}
                    </div>
                    <div className="aboutText">
                        <h1>About Me</h1>
                        {aboutMeText()}
                    </div>
                </div>
                }
            </div>
        </ section>
        )
}

export default About