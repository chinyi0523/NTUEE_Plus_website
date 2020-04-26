import React, { Component } from 'react';
import './column_block_img.css';
import {getImg} from '../columnImgFunc/getImg';
//import getImg from '../columnImgFunc/getImg';

class Column_block_img extends Component{
    constructor(props){
        super(props);
        this.state = {
            img : null,
            id : this.props.id,
            filename: this.props.filename
        }
        this.getImg = getImg.bind(this);
    }
    componentWillMount(){
        console.log(this.state.filename)
        this.getImg(this.state.filename)
    }
    render(){
        
        return(
            <div className="column_block_img_div">
                <img src={this.state.img} alt = {this.state.id} className="column_block_image"/>
            </div>
        );
    }
}

export default Column_block_img;