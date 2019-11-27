import React, { Component } from 'react';
import './Forget.css';
import eesa_icon from './images/eesa-icon.png';

class Forget extends Component{
    render(){
        return(
            <div id="container">
                <div id="register_table">
                    <div id="table">
                        <div id="input">
                            <p id="input_text">Student ID</p>
                            <input id="input_input" placeholder="Student ID"></input>
                        </div>
                        <div id="input">
                            <p id="input_text">Your Email</p>
                            <input id="input_input" placeholder="Your Email"></input>
                        </div>
                        <div id="input">
                            <p id="input_text">Quation</p>
                            <input id="input_input" placeholder="Your favorite movie" type="password"></input>
                        </div>
                        <div id="input">
                            <p id="input_text">Template Password</p>
                            <input id="input_input" placeholder="登入後須設定新密碼"></input>
                        </div>
                    </div>
                    
                    <div id="button">
                        <button type="button">RESET PASSWORD</button>
                    </div>
                </div>
                <div id="FAQ">
                    <div id="FAQ_title">FAQ</div>
                    <div id="splitline"></div>
                    <div id="FAQ_content">
                        <ul id="FAQ_list">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Forget