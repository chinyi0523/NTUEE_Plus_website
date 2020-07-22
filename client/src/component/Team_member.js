import React,{Component} from 'react';
import "./Team_member.css"

class Team_member extends Component{
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
            <div id={this.state.id} style={{display:"inline-block"}} className="Team_member_entity mx-5">
                <img src={this.props.photo_src} alt={this.state.name+"'s photo"} width="200px" height="200px"></img>
                <p id={this.state.id+"_name"}>{this.state.name}</p>
            </div>
        )
    }
}
export default Team_member;