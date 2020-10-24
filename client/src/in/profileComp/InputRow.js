import React from 'react';
import data from "../../images/public_images.json";

const ExpandRow = ({labelClass,inputClass,imgID,labelText,name,value,expand,onChange})=>{
return(
<div className="form-group row mx-auto">
    <label className={labelClass}>
        {labelText}
    </label>
    <button
        className="Profile_expand_button"
        onClick={expand}
    >
        <img
            className="Profile_expand_icon"
            id={imgID}
            src={data.show_more}
            alt="show_more"
        ></img>
    </button>
    {/* <input type="checkbox"
        checked={this.state.phone_company_checkbox}
        onChange={this.handleCheckChange}
        name="phone_company_checkbox"
    ></input> */}
    <input
        id="Profile_phone_company"
        className={inputClass}
        value={value}
        onChange={onChange}
        name={name}
        onFocus={expand}
    />
</div>
)
}

export {ExpandRow}

export default ({labelText,value,name,onChange})=>{
return(
<div className="form-group row mx-auto">
    <label className="col-form-label col-4 Profile_info_label">
        {labelText}
    </label>
    {/* <input type="checkbox"
        className="Profile_diploma_checkbox"
        checked={this.state.master_checkbox}
        onChange={this.handleCheckChange}
        name="master_checkbox"
    ></input> */}
    <input
        className="Profile_input_nonfloat form-control col-7 col-md-6 col-xl-5 offset-1 offset-md-2 offset-xl-3 Profile_info_input"
        value={value}
        onChange={onChange}
        name={name}
    />
</div>
)
}

