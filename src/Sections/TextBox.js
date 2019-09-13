import React from 'react';

const phrases = [
    ["Coding genius", 0],
    ["Good at coding", 2000],
    ['Can write "code"', 2000],
    ["Self taught coder", 4000000000000000000000]
  ];

class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            textGag: ""
        }
    }
    componentDidMount(){
        let letterCount = 0;
        let phraseCount = 0;

        const start = () =>{
            const startTyping = setInterval(()=>{
                if (letterCount < phrases[phraseCount][0].length){
                    this.setState(prevState => ({textGag: prevState.textGag += phrases[phraseCount][0][letterCount]}));
                    letterCount++;
                } else {
                    clearInterval(startTyping)
                    console.log("Typing Finished")
                    setTimeout(()=>{
                        const back = setInterval(()=>{
                            if (letterCount > 0) {
                                this.setState(prevState => ({textGag: prevState.textGag.slice(0, this.state.textGag.length-1) }));
                                letterCount--
                            } else {
                                clearInterval(back) 
                                phraseCount++
                                setTimeout(()=>{start()}, 500);
                                console.log("Deleting Finished")
                                }
                            }, 100)
                        }, phrases[phraseCount][1])
                    }
                }, 100)
            }
        start()
    }

    render(){
        return(
            <div  
            className="homeText"
            style={(this.props.sideNavShow) ? {opacity: 0.2} : {opacity: 1}}
          >
            <h1>Paul Martin</h1>
            <h2>Web Development <br /> Programming <br /> {this.state.textGag}&nbsp;</h2>
            <hr />
            <p>
              A creative, driven, self-taught  developer, who specialises 
              in writing clean, efficient HTML, CSS and JavaScript code.
            </p>      
            <hr />
          </div>
        )
    }
}

export default TextBox