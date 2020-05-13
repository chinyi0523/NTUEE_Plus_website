import React, { Component } from 'react';
import './Team.css';
import {NavBar} from "../component/AppBar"
import Team_member from "../component/Team_member"
import b06_1 from '../images/contributors/B06_1.png';
import b06_2 from '../images/contributors/B06_2.png';
import abroad_1 from '../images/contributors/abroad_1.png';
import abroad_2 from '../images/contributors/abroad_2.png';
import abroad_3 from '../images/contributors/abroad_3.png';
import abroad_4 from '../images/contributors/abroad_4.png';
import front_1 from '../images/contributors/front_1.png';
import front_2 from '../images/contributors/front_2.png';
import front_3 from '../images/contributors/front_3.png';
import front_4 from '../images/contributors/front_4.png';
import back_1 from '../images/contributors/back_1.png';
import back_2 from '../images/contributors/back_2.png';
import back_3 from '../images/contributors/back_3.png';
import back_4 from '../images/contributors/back_4.png';
import back_5 from '../images/contributors/back_5.png';
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
            "leaders" : {
                "鄭謹譯 網頁":b06_1,
                "李筠婕 留學":b06_2,
            },
            "frontend" : {
                "呂承樺":front_4,
                "王友廷":front_1,
                "何明翰":front_3,
                "陳育楷":front_2,
            },
            "backend" : {
                "陳君輔":back_5,
                "李宗倫":back_2,
                "賴侃軒":back_3,
                "吳建翰":back_1,
                "王維恩":back_4
            },
            "study" : {
                "翁瑋襄":abroad_2,
                "余欣澄":abroad_1,
                "施彥宇":abroad_4,
                "周軒羽":abroad_3
            }
        };
        
        return(
            <div id="Team_container">
                <NavBar/>
                <div id="Team_content">
                    <div id="Team_title_hr">Website Contributors</div>
                    <div id="Team_B06">
                        <div id="Team_B06_leader">
                            負責人:
                            {this.Generate_member_profile(B06_teams["leaders"],"leaders")}
                        </div>
                        <div id="Team_B06_frontend">
                            網頁前端團隊:
                            {this.Generate_member_profile(B06_teams["frontend"],"frontend")}
                        </div>
                        <div id="Team_B06_backend">
                            網頁後端團隊:
                            {this.Generate_member_profile(B06_teams["backend"],"backend")}
                        </div>
                        <div id="Team_B06_study">
                            留學資料搜集團隊:
                            {this.Generate_member_profile(B06_teams["study"],"study")}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;