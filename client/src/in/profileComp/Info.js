import React from 'react';
// import data from "../../images/public_images.json";
export default ({realname, nickname,shortintro,handleInputChange}) => { 
return (
<div id="Profile_info">
    <div id="Profile_name" className="mb-4">
        <div className="form-group row mx-auto">
            <label className="col-form-label Profile_info_label col-4">
            Realname:
            </label>
            {/* <input type="checkbox" id="Profile_realname_checkbox" 
                checked = {this.state.realname_checkbox}
                onChange = {this.handleCheckChange}
                name="realname_checkbox"
            ></input> */}
            <input
                type="text"
                className="form-control Profile_info_input col-7 col-md-6 col-xl-5 offset-1 offset-md-2 offset-xl-3"
                value={realname}
                onChange={handleInputChange}
                name="realname"
            ></input>
        </div>
        <div className="form-group row mx-auto">
            <label className="col-form-label Profile_info_label col-4">
            Nickname:
            </label>
            {/* <input type="checkbox" id="Profile_nickname_checkbox"
                checked = {this.state.nickname_checkbox}
                onChange = {this.handleCheckChange}
                name="nickname_checkbox"
            ></input> */}
            <input
                type="text"
                className="form-control Profile_info_input col-7 col-md-6 col-xl-5 offset-1 offset-md-2 offset-xl-3"
                value={nickname}
                onChange={handleInputChange}
                name="nickname"
            ></input>
        </div>
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