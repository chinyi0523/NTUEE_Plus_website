import React, { Component } from 'react';
import "./Home_in.css"
import Footer from "../component/Footer"
import LoginChange from "./LoginChange";
import VisualChange from "./VisualChange";
import {NavBar_in} from '../component/AppBar_in';
class Home_in extends Component{
    render(){
        return (
        <div id="Home_in_container">
            <NavBar_in/>
            <VisualChange />
            <LoginChange /> 
        {/*<div id = "Home_footer">
            <Footer/>
        </div>*/}
        </div>
        )
    }
}

export default Home_in;
