import React, { Component } from 'react';
import './column_title.css';

class Column_title extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: this.props.title,
            id: this.props.id
        }
    }
    render(){
        return(
            <div id={this.state.id}>
                {this.state.title}
            </div>
        )
        }   
}

export default Column_title;