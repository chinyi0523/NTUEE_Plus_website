import React, { Component } from "react";
import Column_block_anno from "./column_block_anno";
import Column_block_title from './column_block_title';
import Column_block_exp from './column_block_exp';
import Column_block_edu from './column_block_edu';
import Column_block_intro from './column_block_intro';
import Column_block_img from './column_block_img';
import './column_block.css';

class Column_block extends Component{
    constructor(props){
        super(props);
        this.state = {
            filename: this.props.block.filename,
			anno : this.props.block.anno,
            title : this.props.block.title,
            exp : this.props.block.exp,
            edu : this.props.block.edu,
            intro : this.props.block.intro,
            id : this.props.block.id,
        }
    }
    render(){
        return(
            <div id = "column_block">
                <Column_block_img id={`${this.state.id}_img`} filename={this.state.filename}/>
                <div id= "column_block_text">
				<Column_block_anno id = {`${this.state.id}_anno`} anno = {this.state.anno}/>
                <Column_block_title id = {`${this.state.id}_title`} title = {this.state.title}/>
				<Column_block_exp id = {`${this.state.id}_exp`} exp = {this.state.exp}/>
				<Column_block_edu id = {`${this.state.id}_edu`} edu = {this.state.edu}/>
				<Column_block_intro id = {`${this.state.id}_intro`} intro = {this.state.intro}/>
                </div>
            </div>
        )
    }
}

export default Column_block
