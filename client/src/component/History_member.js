import React,{Component} from 'react';
import "./History_member.css"

class History_member extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.id,
            //src:this.props.photo_src,
            name:this.props.name
        }
    }
    render(){
        return(
            <div id={this.state.id} style={{display:"inline-block"}} className="History_member_entity mx-5">
                <img src={this.props.photo_src} alt={this.state.name+"'s photo"} width="250px" height="250px"></img>
                <p id={this.state.id+"_name"}>{this.state.name}</p>
            </div>
        )
    }
}
export default History_member;