import React, { Component } from 'react';
//import React, {useState} from 'react';
import './column_intro.css';

class Column_intro extends Component{
    constructor(props){
        super(props);
        this.state = {
           intro: this.props.intro,
            id: this.props.id
        }
        this.addIntro = this.addIntro.bind(this);
    }
    addIntro(i,content){
        let intro_container = document.getElementById(this.state.id);
        let newintro = document.createElement("p");
        newintro.setAttribute('href','#');
        newintro.setAttribute('class','column_intro');
        newintro.setAttribute('id',this.state.id+"_"+i);
        newintro.innerHTML = content;
        intro_container.appendChild(newintro);
    }
    componentDidMount(){
        for (let i = 1; i< this.state.intro.length+1; i++) {
          this.addIntro(i,this.state.intro[i-1]);
        }
    }
    render(){
        return(
            <div id={this.state.id} class="column_intro">
                {/* {this.state.title} */}
            </div>
        )
        }   
}
export default Column_intro;