import React, { Component } from 'react';
import './column_block_exp.css';

class Column_block_exp extends Component{
    constructor(props){
        super(props);
        this.state = {
            exp : this.props.exp,
            id : this.props.id
        }
        this.addExp = this.addExp.bind(this);
    }
    addExp(i,content){
        let exp_container = document.getElementById(this.state.id);
        let new_exp = document.createElement("li");
        new_exp.setAttribute('href','#');
        new_exp.setAttribute('class','column_block_exp');
        new_exp.setAttribute('id',this.state.id+"_"+i);
        new_exp.innerHTML = content;
        exp_container.appendChild(new_exp);
    }
    componentDidMount(){
        for (let i = 1; i< this.state.exp.length+1; i++) {
          this.addExp(i,this.state.exp[i-1]);
        }
    }
    
    render(){
        return(
            <div id={this.state.id} class="column_block_exp">
                <li id="column_block_experience">經歷</li>
                {/* {this.state.exp} */}
            </div>
        )
    }
}
export default Column_block_exp;