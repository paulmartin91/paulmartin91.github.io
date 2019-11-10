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
                    //console.log("Typing Finished")
                    setTimeout(()=>{
                        const back = setInterval(()=>{
                            if (letterCount > 0) {
                                this.setState(prevState => ({textGag: prevState.textGag.slice(0, this.state.textGag.length-1) }));
                                letterCount--
                            } else {
                                clearInterval(back) 
                                phraseCount++
                                setTimeout(()=>{start()}, 500);
                                //console.log("Deleting Finished")
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
            className={(this.props.isMobile) ? "mobileHomeText" : "homeText"}
          >
            <div className = "homeTextBlur" />
            <div style={(this.props.sideNavShow) ? {opacity: 0.2, transition: "0.8s"} : {opacity: 1, transition: "0.5s"}}>
                <h1
                    style={(this.props.isMobile) ? {marginTop: 15, marginBottom: 0} : null}
                >
                    Paul Martin</h1>
                <h2>Web Development <br /> Programming <br /> {this.state.textGag}&nbsp;</h2>
                <hr />
                <p>
                A creative, driven, self-taught{(this.props.isMobile) && <br />}  developer, who specialises 
                in {(this.props.isMobile) && <br />}writing clean, efficient HTML, {(this.props.isMobile) && <br />}CSS and JavaScript code.
                </p>      
                {(this.state.isMobile) && <hr />}
            </div>
          </div>
        )
    }
}

export default TextBox