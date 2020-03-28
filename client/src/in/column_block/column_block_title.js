import React, { Component } from 'react';
import './column_block_title.css';

class Column_block_title extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.title,
            id : this.props.id
        }
        this.addTitle = this.addTitle.bind(this);
    }
    addTitle(i,content){
        let title_container = document.getElementById(this.state.id);
        let new_title = document.createElement("p");
        new_title.setAttribute('href','#');
        new_title.setAttribute('class','column_title');
        new_title.setAttribute('id',this.state.id+"_"+i);
        new_title.innerHTML = content;
        title_container.appendChild(new_title);
    }
    componentDidMount(){
        for (let i = 1; i< this.state.title.length+1; i++) {
          this.addTitle(i,this.state.title[i-1]);
        }
    }
    render(){
        return(
            <div id={this.state.id} class="column_block_title">
                {/* {this.state.title} */}
            </div>
        )
    }
}
export default Column_block_title;