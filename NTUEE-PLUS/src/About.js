import React, { Component } from 'react';
import './About.css';
import eesa_icon from './images/eesa-icon.png';

class About extends Component{
    render(){
        return (
        <div id="container">
            <div id="up">
                <h1 id="up_text">
                    Welcome to NTUEE+
                </h1>
            </div>
            
            <div id="down">
                <p id="down_text">
                    我們希望這個聯絡網能成為<br/>
                    一個整合式的社群網路，<br/>
                    讓NTUEErs聚在一起；<br/>
                    秉持著恢復人脈網的精神，<br/>
                    讓NTUEE能在世界上有更大的影響力；<br/>
                    建立一個連結電機系的共同回憶，<br/>
                    讓系友們有專屬的家！
                </p>
            </div>

            <div id="butt">
                <button type="button_text">JOIN US</button>
            </div>
            
        </div>
        )
    }
}

export default About;
