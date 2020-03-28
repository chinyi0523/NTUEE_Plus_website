import React, { Component } from "react";
import "./column_block_anno.css";

class Column_block_anno extends Component{
    constructor(props){
        super(props);
        this.state = {
            anno : this.props.anno,
            id : this.props.id
        }
        this.addAnno = this.addAnno.bind(this);
    }
    addAnno(i,content){
        let anno_container = document.getElementById(this.state.id);
        let newAnno = document.createElement("p");
        newAnno.setAttribute('href','#');
        if(i == 1){
            newAnno.setAttribute('class','column_block_anno');}
        if(i == 2){newAnno.setAttribute('class','column_block_date');}
        newAnno.setAttribute('id',this.state.id+"_"+i);
        newAnno.innerHTML = content;
        anno_container.appendChild(newAnno);
    }
    componentDidMount(){
        for (let i = 1; i< this.state.anno.length+1; i++) {
          this.addAnno(i,this.state.anno[i-1]);
        }
    }

    render(){
        return(
            <div id={this.state.id} class="column_block_Anno">
                {/* {this.state.anno} */}
            </div>
        )
    }
}

export default Column_block_anno;