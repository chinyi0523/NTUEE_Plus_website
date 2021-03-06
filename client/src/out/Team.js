import React, { Component } from "react";
import "./Team.css";
import data from "../images/contributors/contributor_images.json";
// import b06_1 from "../images/contributors/B06_1.png"
// import b06_2 from "../images/contributors/B06_2.png"
// import abroad_1 from "../images/contributors/abroad_1.png"
// import abroad_2 from "../images/contributors/abroad_2.png"
// import abroad_3 from "../images/contributors/abroad_3.png"
// import abroad_4 from "../images/contributors/abroad_4.png"
// import abroad_5 from "../images/contributors/abroad_5.png"
// import front_1 from "../images/contributors/front_1.png"
// import front_2 from "../images/contributors/front_2.png"
// import front_3 from "../images/contributors/front_3.png"
// import front_4 from "../images/contributors/front_4.png"
// import front_5 from "../images/contributors/front_5.png"
// import back_1 from "../images/contributors/back_1.png"
// import back_2 from "../images/contributors/back_2.png"
// import back_3 from "../images/contributors/back_3.png"
// import back_4 from "../images/contributors/back_4.png"
// import back_5 from "../images/contributors/back_5.png"
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
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Generate_member_profile = this.generateMemberProfile.bind(this);
  }

  generateMemberProfile(member_list, team_name) {
    const member_components = [];
    let count = 0;
    for (let name in member_list) {
      member_components.push(
        <Team_member
          className="Team_member_profile"
          id={"History_" + team_name + "_" + count}
          name={name}
          photo_src={member_list[name]}
        />
      );
      count++;
    }
    return (
      <div
        id={"Team_" + team_name + "_member"}
        className="row justify-content-center"
      >
        {member_components}
      </div>
    );
  }
  render() {
    const B06_teams = {
      leaders: {
        "????????? ??????": data.b06_1,
        "????????? ??????": data.b06_2,
      },
      frontend: {
        ?????????: data.front_4,
        ?????????: data.front_1,
        ?????????: data.front_3,
        ?????????: data.front_2,
        ?????????: data.front_5,
      },
      backend: {
        ?????????: data.back_5,
        ?????????: data.back_2,
        ?????????: data.back_3,
        ?????????: data.back_1,
        ?????????: data.back_4,
      },
      study: {
        ?????????: data.abroad_2,
        ?????????: data.abroad_1,
        ?????????: data.abroad_5,
        ?????????: data.abroad_3,
        ?????????: data.abroad_4,
      },
    };

    return (
      <div id="Team_container">
        <div id="Team_content" className="container-fluid">
          <div id="Team_title_hr">Website Contributors</div>
          <div id="Team_B06">
            <div id="Team_B06_leader" className="container-fluid mt-3">
              ?????????:
              {this.generateMemberProfile(B06_teams["leaders"], "leaders")}
            </div>
            <div id="Team_B06_frontend">
              ??????????????????:
              {this.generateMemberProfile(B06_teams["frontend"], "frontend")}
            </div>
            <div id="Team_B06_backend">
              ??????????????????:
              {this.generateMemberProfile(B06_teams["backend"], "backend")}
            </div>
            <div id="Team_B06_study">
              ????????????????????????:
              {this.generateMemberProfile(B06_teams["study"], "study")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;

const Team_member = (props) => {
  return (
    <div
      id={props.id}
      style={{ display: "inline-block" }}
      className="History_member_entity mx-5"
    >
      <img
        src={props.photo_src}
        alt={props.name + "'s photo"}
        width="250px"
        height="250px"
      />
      <p id={props.id + "_name"}>{props.name}</p>
    </div>
  );
};
