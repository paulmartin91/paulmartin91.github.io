import React from 'react';
import './SectionsSCSS/About.scss';
import MyPhoto from './MyPhoto/Paul.jpeg';

const About = (props) => {
    return(
        (props.compRender && props.sectionShow === "about") &&
        <section 
            className= 'aboutHolder'
            >
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
                        <p>
                        In October 2017 I made my first "Hello World" appear and I've been obsessed with 
                        writing code ever since. I love programming, writing, designing and anything else 
                        that combines open ended challenges with creative thinking. 
                        <br /><br />
                        My speciality is front-end web development, but I have a fascination with low level 
                        languages and I've managed to squeeze learning C++ into the last remaining hours of 
                        my day, while working full time in television production. When I'm not writing code, 
                        I'm probably playing golf with my friends, watching action movies or taking 
                        photos on my DSLR.
                        </p>
                    </div>
                    <div className = "amSkills amSkillsHolder">
                        <div>
                        <h1>Key Skills...</h1>
                        <li>+ HTML/CSS</li>
                        <li>+ Javascript</li>
                        <li>+ React</li>
                        <li>+ Node JS</li>
                        <li>+ Express</li>
                        <li>+ Mongo DB</li>
                        <li>+ Web design</li>
                        <li>+ Photoshop</li>
                        <li>+ Photography</li>
                        <li>+ Video Editing</li>
                        </div>
                        <br />
                        <div>
                        <h1>Currently learning...</h1>
                        <li>+ C++</li>
                        <li>+ Redux</li>
                        </div>
                    </div>
                </div>
                :
                //non Mobile 
                <div className="aboutBottom">
                    <div className = "amSkills">
                        <h1>Key Skills...</h1>
                        <li>+ HTML/CSS</li>
                        <li>+ Javascript</li>
                        <li>+ React</li>
                        <li>+ Node JS</li>
                        <li>+ Express</li>
                        <li>+ Mongo DB</li>
                        <li>+ Web design</li>
                        <li>+ Photoshop</li>
                        <li>+ Photography</li>
                        <li>+ Video Editing</li>
                        <h1>Currently learning...</h1>
                        <li>+ C++</li>
                        <li>+ Redux</li>
                    </div>
                    <div className="aboutText">
                        <h1>About Me</h1>
                        <p>
                        In October 2017 I made my first "Hello World" appear and I've been obsessed with 
                        writing code ever since. I love programming, writing, designing and anything else 
                        that combines open ended challenges with creative thinking. 
                        <br /><br />
                        My speciality is front-end web development, but I have a fascination with low level 
                        languages and I've managed to squeeze learning C++ into the last remaining hours of 
                        my day, while working full time in television production. When I'm not writing code, 
                        I'm probably playing golf with my friends, watching action movies or taking 
                        photos on my DSLR.
                        </p>
                    </div>
                </div>
                }
            </div>
        </ section>
        )
}

export default About