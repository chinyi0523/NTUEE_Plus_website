import React, { Component } from 'react';
import './History.css';
import {NavBar} from "../component/AppBar"
import History_member from "../component/History_member"
import B03_1 from '../images/history/B03_1.png';
import B03_2 from '../images/history/B03_2.png';
import B03_3 from '../images/history/B03_3.png';
import B03_4 from '../images/history/B03_4.png';
import B04_1 from '../images/history/B04_1.png';
import B04_2 from '../images/history/B04_2.png';
import B05_1 from '../images/history/B05_1.png';
import B05_2 from '../images/history/B05_2.png';
import B06_1 from '../images/history/B06_1.png';
import B06_2 from '../images/history/B06_2.png';
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
class History extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.Generate_member_profile =this.Generate_member_profile.bind(this)
    }
    
    Generate_member_profile(member_list,team_name){
        const member_components = [];
        let count = 0;
        for (let name in member_list){
            member_components.push(<History_member className="Team_member_profile" id={"History_"+team_name+"_"+count} name={name} photo_src={member_list[name]}/>)
            count++;
        }
        return(
            <div id={"Team_"+team_name+"_member"}>
                {member_components}
            </div>
        )
    }
    render(){
        const B03_teams = 
        {
            "leaders" : {"許秉鈞":B03_4,"袁培傑":B03_3,"楊景鈞":B03_2,"劉禹辰":B03_1},
        };
        const B04_teams = 
        {
            "leaders" : {"蔡忠紘":B04_1,"陳曦":B04_2},
        };
        const B05_teams = 
        {
            "leaders" : {"莊永松":B05_1,"趙冠豪":B05_2},
        };
        const B06_teams = 
        {
            "leaders" : {"鄭謹譯":B06_1,"李筠婕":B06_2},
        };
        return(
            <div id="History_container">
                <NavBar/>
                <div id="History_content">
                    <div id="History_title_hr">History</div>
                    <div id="History_B03">
                        <div id="History_B03_title_hr">B03 Founder of NTUEE+</div>
                        <div id="History_B03_leader">
                            {this.Generate_member_profile(B03_teams["leaders"],"leaders")}
                        </div>
                    </div>
                    <div id="History_B04">
                        <div id="History_B04_title_hr">B04 2nd NTUEE+</div>
                        <div id="History_B04_leader">
                            {this.Generate_member_profile(B04_teams["leaders"],"leaders")}
                        </div>
                    </div>
                    <div id="History_B05">
                        <div id="History_B05_title_hr">B05 3rd NTUEE+</div>
                        <div id="History_B05_leader">
                            {this.Generate_member_profile(B05_teams["leaders"],"leaders")}
                        </div>
                    </div>
                    <div id="History_B06">
                        <div id="History_B06_title_hr">B06 4th NTUEE+</div>
                        <div id="History_B06_leader">
                            {this.Generate_member_profile(B06_teams["leaders"],"leaders")}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default History;