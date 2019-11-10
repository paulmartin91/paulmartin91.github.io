import React from 'react';

const Navigation = (props) => {
    return (
        <div 
        className={(props.isMobile) ? "mobileNavigationTabs" : "navigationTabs"}
      >
          <a 
          onClick ={(!props.waiting) && props.handleClick}
          name="about">
          {!props.sideNavShow && "About"}
          </a>
          <a 
          onClick ={(!props.waiting) && props.handleClick}
          name="projects">
          {(props.sideNavShow) ? "Home" : "Projects"}
          </a>
          <a 
          onClick ={(!props.waiting) && props.handleClick}
          name="contact">
          {!props.sideNavShow && "Contact"}
          </a>
      </div>
    )
}

export default Navigation;