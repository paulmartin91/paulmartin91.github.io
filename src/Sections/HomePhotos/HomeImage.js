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
                console.log(counter);
                (!this.state.opacity) ? this.setState({currentPhoto: HomePhotos[counter].image}) : this.setState({nextPhoto: HomePhotos[counter].image});
                (counter===11) ? counter = 0 : counter++;
            }, 4000)
        }, 10000)
    }

    render(){
    return(
        <section>
            <img 
                className="currentPhoto" 
                src={this.state.currentPhoto} 
                alt="ERROR"
                style={{
                    position: "absolute",
                    zIndex: -5,
                    opacity: (this.state.opacity) ? 1 : 0,
                    transition: "2s",
                    width: "65vw"
                }}
                />
            <img 
                className="nextPhoto" 
                src={this.state.nextPhoto} 
                alt="ERROR"
                style={{
                    position: "absolute",
                    zIndex: -5,
                    opacity: (!this.state.opacity) ? 1 : 0,
                    transition: "2s",
                    width: "65vw"
                }}
                />    
        </section>
    )
    }
}

export default HomeImage;