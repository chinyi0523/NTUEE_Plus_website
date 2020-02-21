import React, { Component } from 'react';
import './Support.css';
import eesa_icon from '../images/eesa-icon.png';
import { NavBar } from '../component/AppBar';
import Footer from "../component/Footer";
class Support extends Component{
    render(){
        return (
        <div id="Support_container">
        <NavBar/> 
            <div id="Support_up">
                <h3 id="Support_up_text">
                    Your support is vital in enabling NTUEE+ to fulfill
                    <br />
                    our mission to chain all the alumnae in the world.
                </h3>
            </div>
            <div id="Support_down">
                <p id="Support_down_text">
                    帳戶:700-0001236-0553850
                    <br />
                    備註:NTUEE-PLUS
                </p>
            </div>
            
            <footer id="index_footer"><Footer/></footer>
        </div>
        )
    }
}

export default Support;
