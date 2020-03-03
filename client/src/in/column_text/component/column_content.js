import React, { Component } from 'react';
import Column_title from './column_title';
import Column_hashtags from './column_hashtags';
import Column_article from './column_article';
import Column_sp_thx from './column_sp_thx';
/*
content = {
    title:string
    hashtags:[hashtag1,hashtag2...]
    sections:[
        //第一段
        {
            title:...
            sections:[section1,section2...]
        }
        //第二段
        {
            title:...
            sections:[section1,section2...]
        }
        .
        .
        .
    ]
    sp_thx:string
    id:string(ex:Column_1912)
}
*/ 
class Column_content extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:this.props.content.title,
            hashtags: this.props.content.hashtags,
            sections: this.props.content.sections,
            sp_thx: this.props.content.sp_thx,
            id: this.props.content.id,
        }
    }
    render(){
        return(
            <div id={`${this.state.id}_content`}>
                <Column_title id={`${this.state.id}_title`} title={this.state.title}/>
                <Column_hashtags id={`${this.state.id}_hashtags`} hashtags={this.state.hashtags}/>
                <Column_article id={`${this.state.id}_article`} sections={this.state.sections}/>
                <Column_sp_thx id={`${this.state.id}_sp_thx`} sp_thx={this.state.sp_thx}/>
            </div>
        )
    }
}

export default Column_content