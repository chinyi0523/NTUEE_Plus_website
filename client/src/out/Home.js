import React, { Component } from 'react';
import "./Home.css"
import Footer from "../component/Footer";
//import LoginChange from "./LoginChange";
//import VisualChange from "./VisualChange";
import Profile from "../in/profile";
import Logout from "./Logout";

class Home extends Component{
	
    render(){
        return (
        <div id = "Home_title">
			<Logout />
			NTUEE+
			<Profile />
			{/*<LoginChange />
			<VisualChange />*/}
			<div id = "Home_footer"><Footer/></div>
        </div>
        )
    }
}

export default Home;
