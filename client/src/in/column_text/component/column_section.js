import React, { Component } from 'react';
import './column_section.css';

class Column_section extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.content.title,
            sections : this.props.content.sections,
            id : this.props.id
        }
    }
    componentDidMount(){
        let minor_section_container = document.getElementById(this.state.id);
        for (let i=0;i<this.state.sections.length;i++){
            let new_minor_section = document.createElement('div')
            new_minor_section.setAttribute('class','column_minor_sections');
            new_minor_section.setAttribute('id',this.state.id+"minor_section"+(i+1));
            new_minor_section.innerHTML = this.state.sections[i]
            minor_section_container.appendChild(new_minor_section)
        }
    }
        
    
    render(){
        return(
            <div id={this.state.id}>
                <p id={this.state.id+"_title"}>
                    {this.state.title}
                </p>
            </div>
        )
    }
}
export default Column_section;