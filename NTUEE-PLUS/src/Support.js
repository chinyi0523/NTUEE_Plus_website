import React, { Component } from 'react';
import './Support.css';
import eesa_icon from './images/eesa-icon.png';

class Support extends Component{
    render(){
        return (
        <div id="container">
            <div id="up">
                <h3 id="up_text">
                    Your support is vital in enabling NTUEE+ to fulfill
                    <br />
                    our mission to chain all the alumnae in the world.
                </h3>
            </div>
            <div id="down">
                <p id="down_text">
                    帳戶:700-0001236-0553850
                    <br />
                    備註:NTUEE-PLUS
                </p>
            </div>
            <div id="footer">
                <p id="footer_text">
                    聯絡信箱:ntueesa@gmail.com<br/>
                    台灣大學電機工程學系 系學會
                </p>
            </div>
            <div id="logo">
                <img id="logo_pic" src={eesa_icon} width="100px" alt="logo"/>
            </div>
        </div>
        )
    }
}

export default Support;
