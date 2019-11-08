import React from 'react';
import HomePhotos from './HomePhotos'

class HomeImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentPhoto: HomePhotos[0].image,
            nextPhoto: HomePhotos[1].image,
            opacity: true
        }
    }

    componentDidMount(){
        let counter = 2;
        setInterval(()=>{
            this.setState(prevState=>({
                opacity: !prevState.opacity
            }))
            setTimeout(()=>{
                //console.log(counter);
                (!this.state.opacity) ? this.setState({currentPhoto: HomePhotos[counter].image}) : this.setState({nextPhoto: HomePhotos[counter].image});
                (counter===11) ? counter = 0 : counter++;
            }, 4000)
        }, 10000)
    }

    render(){
    return(
        <div 
        className = "homePhotos"
        style={(this.props.isMobile) ? {width: "100vw", height: "50%"} : null}
        >
            <div 
                style={{
                    backgroundImage: "url("+this.state.currentPhoto+")",
                    position: "absolute",
                    zIndex: "-5",
                    opacity: (this.state.opacity) ? 1 : 0,
                    transition: "2s",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    top: "0",
                }}
                />
            <div 
                style={{
                    backgroundImage: "url("+this.state.nextPhoto+")",
                    position: "absolute",
                    zIndex: "-5",
                    opacity: (!this.state.opacity) ? 1 : 0,
                    transition: "2s",
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    top: "0",
                }}
                />    
        </div>
    )
    }
}

export default HomeImage;