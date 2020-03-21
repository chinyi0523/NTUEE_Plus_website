import React, { Component } from 'react';
import './Team.css';
import {NavBar} from "../component/AppBar"
import Team_member from "../component/Team_member"
import left_image from '../images/left_image.png';
/* format:
    team leader should be first
    {
        leaders: 
        {
            name1:photo_src1,
            name2:photo_src2
            .
            .
            .
        }
        frontend:
        {
            ...
        }
        .
        .
        .
    }
*/
class Team extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.Generate_member_profile =this.Generate_member_profile.bind(this)
    }
    
    Generate_member_profile(member_list,team_name){
        const member_components = [];
        let count = 0;
        for (let name in member_list){
            member_components.push(<Team_member className="Team_member_profile" id={"Team_"+team_name+"_"+count} name={name} photo_src={member_list[name]}/>)
            count++;
        }
        return(
            <div id={"Team_"+team_name+"_member"}>
                {member_components}
            </div>
        )
    }
    render(){
        const B06_teams = 
        {
            "leaders" : {"1":left_image,
                       "2":left_image
                        },
            "frontend" : {
                "1":left_image,
                "2":left_image
            },
            "backend" : {
                "1":left_image,
                "2":left_image
            },
            "study" : {
                "1":left_image,
                "2":left_image
            }
        };
        
        return(
            <div id="Team_container">
                <NavBar/>
                <div id="Team_content">
                    <div id="Team_title_hr">History Team</div>
                    <div id="Team_B06">
                        <div id="Team_B06_title_hr">B06</div>
                        <div id="Team_B06_leader">
                            Leaders:
                            {this.Generate_member_profile(B06_teams["leaders"],"leaders")}
                        </div>
                        <div id="Team_B06_frontend">
                            Front-End Developers:
                            {this.Generate_member_profile(B06_teams["frontend"],"frontend")}
                        </div>
                        <div id="Team_B06_backend">
                            Back-End Developers:
                            {this.Generate_member_profile(B06_teams["backend"],"backend")}
                        </div>
                        <div id="Team_B06_study">
                            Study:
                            {this.Generate_member_profile(B06_teams["study"],"study")}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;