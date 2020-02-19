import React, { Component } from 'react';
import "./Home.css"
import Footer from "../component/Footer";
import { NavBar } from '../component/AppBar';
//import LoginChange from "./LoginChange";
//import VisualChange from "./VisualChange";
//import Profile from "../in/profile";

class Home extends Component{
	
    render(){
        return (
        <div>
            <NavBar/>
        <div id = "Home_title">
            
			NTUEE+
			{/*<Profile />
			<LoginChange />
			<VisualChange />*/}
			<div id = "Home_footer"><Footer/></div>
        </div>
        </div>
        )
    }
}

export default Home;
