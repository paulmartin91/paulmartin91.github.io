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
            <p>Say Hi 👋</p>
            <p2>Email: <a href="mailto:pauledwardmartin91@gmail.com" >pauledwardmartin91@gmail.com</a></p2>
        <div className = "socialAll">
            <img src={FCC} className="socialImages"/>
            <img src={Github} className="socialImages"/>
            <img src={CodeWars} className="socialImages"/>
            <img src={LinkedIn} className="socialImages"/>
        </div> 

        </div>
        </ section>
    )
}

export default Contact