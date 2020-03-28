import React, { Component } from 'react';
import './column_block_img.css';

class Column_block_img extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         img : this.props.img,
    //         id : this.props.id
    //     }
    // }
    render(){
        const {img} = require(this.props);
        return(
            <div className={"column_block_img"}>
                <img src='{img}' alt = "iii"/>
            </div>
        );
    }
}

export default Column_block_img;