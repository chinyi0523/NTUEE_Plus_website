import React, { Component } from 'react';
import './Support.css';
import eesa_icon from '../images/eesa-icon.png';
import { NavBar } from '../component/AppBar';

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
            
            <div id="Support_footer">
                <img id="Support_logo" src={eesa_icon} alt="logo"></img>
                <p id="Support_footer_text">聯絡信箱 : ntueesa@gmail.com</p>
                <p id="Support_footer_text_2">台灣大學電機工程學系 系學會</p>
            </div>
        </div>
        )
    }
}

export default Support;
