import React from 'react';
import eesa from '../../images/eesa-icon.png';
import "./Footer.css"
const Footer = () => {
    return (
      <div className = "Footer_main">
        <div className = "Footer_container">
          <div className = "Footer_row">
            <div className = "footer_col_1">
              <ul className = "footer_list">
                <li> 國立臺灣大學電機工程學系 系學會 </li>
                <li> National Taiwan University Electrical Engineering Department Student Association </li>
                <li> Email: ntueesa@gmail.com </li>
              </ul>
            </div>
            <div className = "footer_col_2">  
              <img src={eesa} alt="eesa" className = "icon_img"/>
            </div>
          </div>
          {/* <br/> */}

          <div className="Footer_row">
            <div className="footer_copy">
              <p id = "footer_col_sm">
                Copyright &copy; {new Date().getFullYear()} NTUEESA
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Footer;