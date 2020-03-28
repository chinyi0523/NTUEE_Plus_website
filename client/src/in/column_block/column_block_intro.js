import React, { Component } from "react";
import './column_block_intro.css';

class Column_block_intro extends Component{
    constructor(props){
        super(props);
        this.state = {
            intro : this.props.intro,
            id : this.props.id
        }
        this.addIntro = this.addIntro.bind(this);
    }
    addIntro(i,content){
        let Intro_container = document.getElementById(this.state.id);
        let new_Intro = document.createElement("p");
        new_Intro.setAttribute('href','#');
        new_Intro.setAttribute('class','column_Intro');
        new_Intro.setAttribute('id',this.state.id+"_"+i);
        new_Intro.innerHTML = content;
        Intro_container.appendChild(new_Intro);
    }
    componentDidMount(){
        for (let i = 1; i< this.state.intro.length+1; i++) {
          this.addIntro(i,this.state.intro[i-1]);
        }
    }

    render(){
        return(
            <div id={this.state.id} class="column_block_intro">
                {/* {this.state.intro} */}
            </div>
        ) 
    }
}

export default Column_block_intro;