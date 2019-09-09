import React from 'react';
import './SectionsSCSS/Contact.scss';

//logos
import FCC from './ContactImages/FCC.png'
import Github from './ContactImages/Github.png'
import CodeWars from './ContactImages/CodeWars.png'
import LinkedIn from './ContactImages/LinkedIn.png'

const Contact = (props) => {
    return(
        <section 
        className='contactHolder'
        style={(props.sectionShow === "contact" && props.sideNavShow) ? {diplay: "flex"} : {display: "none"}}
        >
        <div className = "contact">
            <p>Say Hi 👋</p>
            <a>Email: <a href="mailto:pauledwardmartin91@gmail.com" >pauledwardmartin91@gmail.com</a></a>
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