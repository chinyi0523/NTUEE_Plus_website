import React, { Component } from 'react';
import './column_block_edu.css';

class Column_block_edu extends Component{
    constructor(props){
        super(props);
        this.state = {
            edu : this.props.edu,
            id : this.props.id
        }
        this.addEdu = this.addEdu.bind(this);
    }
    addEdu(i,content){
        let edu_container = document.getElementById(this.state.id);
        let new_edu = document.createElement("li");
        new_edu.setAttribute('href','#');
        new_edu.setAttribute('class','column_block_edu');
        new_edu.setAttribute('id',this.state.id+"_"+i);
        new_edu.innerHTML = content;
        edu_container.appendChild(new_edu);
    }
    componentDidMount(){
        for (let i = 1; i< this.state.edu.length+1; i++) {
          this.addEdu(i,this.state.edu[i-1]);
        }
    }
    
    render(){
        return(
            <div id={this.state.id} class="column_block_edu">
                <li id = 'column_block_eduaction'>學歷</li>
                {/* {this.state.edu} */}
            </div>
        )
    }
}
export default Column_block_edu;