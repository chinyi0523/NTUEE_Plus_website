import React from 'react';
import InfoElement from './InputRow'
// import data from "../../images/public_images.json";
export default ({realname, nickname,shortintro,handleInputChange}) => { 
return (
<div id="Profile_info">
    <div id="Profile_name" className="mb-4">
        <InfoElement
            labelText="Realname:"
            value={realname}
            onChange={handleInputChange}
            name="realname"
        />
        <InfoElement
            labelText="Nickname:"
            value={nickname}
            onChange={handleInputChange}
            name="nickname"
        />
    </div>
    <div>
        <p className="Profile_info_label">Talk about yourself:</p>
        <textarea
            id="Profile_shortintro"
            name="shortintro"
            placeholder="briefly introduce yourself!"
            value={shortintro}
            onChange={handleInputChange}
        ></textarea>
    </div>
</div>
)
}