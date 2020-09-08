import React, { Component } from 'react';
//import React, {useState} from 'react';
import './column_subtitle.css';

class Column_subtitle extends Component{
    constructor(props){
        super(props);
        this.state = {
           subtitle: this.props.subtitle,
            id: this.props.id
        }
        this.addSubTitle = this.addSubTitle.bind(this);
    }
    addSubTitle(i,content){
        let subtitle_container = document.getElementById(this.state.id);
        let newsubtitle = document.createElement("p");
        newsubtitle.setAttribute('href','#');
        newsubtitle.setAttribute('class','column_subtitle');
        newsubtitle.setAttribute('id',this.state.id+"_"+i);
        newsubtitle.innerHTML = content;
        subtitle_container.appendChild(newsubtitle);
    }
    componentDidMount(){
        for (let i = 1; i< this.state.subtitle.length+1; i++) {
          this.addSubTitle(i,this.state.subtitle[i-1]);
        }
    }
    render(){
        return(
            <div id={this.state.id} class="column_subtitle">
                {/* {this.state.title} */}
            </div>
        )
        }   
}
export default Column_subtitle;