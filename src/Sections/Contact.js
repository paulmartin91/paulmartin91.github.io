import React from 'react';
import './SectionsSCSS/Contact.scss';

//logos
import FCC from './ContactImages/FCC.png'
import Github from './ContactImages/Github.png'
import CodeWars from './ContactImages/CodeWars.png'
import LinkedIn from './ContactImages/LinkedIn.png'

const Contact = (props) => {
    return(
        (props.compRender && props.sectionShow === "contact") &&
        <section 
        className='contactHolder'
        >
        <div className = {(props.isMobile) ? "mobileContact" : "contact"}>
            <p>Say Hi <span role="img">👋</span></p>
            <p2>Email: <a href="mailto:pauledwardmartin91@gmail.com" >pauledwardmartin91@gmail.com</a></p2>
            <div className = "socialAll">
                <a href="https://www.freecodecamp.org/paulmartin" target="_blank"><img src={FCC} className="socialImages" alt="Free Code Camp"/></a>
                <a href="https://github.com/paulmartin91/" target="_blank"><img src={Github} className="socialImages" alt="Github"/></a>
                <a href="https://www.codewars.com/users/paulimo/completed" target="_blank"><img src={CodeWars} className="socialImages" alt="Codewars"/></a>
                <a href="https://www.linkedin.com/in/paul-martin-35b24569/" target="_blank"><img src={LinkedIn} className="socialImages" alt="LinkedIn"/></a>
            </div> 
        </div>
        </ section>
    )
}

export default Contact