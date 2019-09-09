import React from 'react';
import './SectionsSCSS/Home.scss';
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import HomeImage from './HomePhotos/HomeImage.js'
import TextBox from './TextBox.js'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
        sideNavShow: false,
        sectionShow: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){

  }

  handleClick(event){
    //Toggle showing the sidebar
    let tabName = event.target.name
        this.setState(prevState => ({
            sideNavShow: !prevState.sideNavShow,
            sectionShow: tabName
        }));
    }

  render(){

    return(
     <section>
        <div className="homeAll">

          {/* Photos */}
            <div className="homePhotos">
                  <HomeImage className="homePhotos"/>
            </div>

          {/* Text Box */}  
            <TextBox sideNavShow={this.state.sideNavShow}/>

          {/* Side Window */}
            <div className="homeNavigation" 
                 style={(this.state.sideNavShow) ? {
                   width: "90vw",
                   left: "0px",
                  } : null}>

          {/* Sections */}
           <About sectionShow={this.state.sectionShow} sideNavShow={this.state.sideNavShow}/>
           <Projects sectionShow={this.state.sectionShow} sideNavShow={this.state.sideNavShow}/>
           <Contact sectionShow={this.state.sectionShow} sideNavShow={this.state.sideNavShow}/>

          {/* Navigation Tabs */}
            <div className="navigationTabs">
                <a 
                onClick={this.handleClick} 
                name="about">{!this.state.sideNavShow && "About"}
                </a>
                <a 
                onClick={this.handleClick} 
                style={(this.state.sideNavShow) ? {transform: "rotate(-270deg)"} : {transform: "rotate(-90deg)"}}
                name="projects">{(this.state.sideNavShow) ? "Home" : "Projects"}
                </a>
                <a onClick={this.handleClick} name="contact">{!this.state.sideNavShow && "Contact"}</a>
            </div>

        </div> 
        </div>
    </ section>
    )
  }
}

export default Home;