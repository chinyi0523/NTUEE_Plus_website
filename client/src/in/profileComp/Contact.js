import React from 'react';
import ContactElement,{ExpandRow} from './InputRow'

export default ({email,address,phone_company,phone_home,handleInputChange,mobile,expandElement}) => { 
const expand = (e) => {
    e.preventDefault()
    expandElement(
        "Profile_expand_phone",
        "hr4",
        "Profile_expand_icon_1",
        "2rem",
        "0rem"
    );
}
return (
<div id="Profile_more_info">
    <ContactElement
        labelText="Email:"
        value={email}
        onChange={handleInputChange}
        name="email"
    />
    <ContactElement
        labelText="Living Address:"
        value={address}
        onChange={handleInputChange}
        name="address"
    />
    <ExpandRow
        labelClass="col-form-label col-5 Profile_info_label"
        labelText="Phone(Office):"
        inputClass="form-control col-5 ml-auto Profile_info_input"
        value={phone_company}
        onChange={handleInputChange}
        name="phone_company"
        expand={expand}
        imgID="Profile_expand_icon_1"
    />
    
    <div id="Profile_expand_phone">
        <ContactElement
            labelText="Phone(Home):"
            value={phone_home}
            onChange={handleInputChange}
            name="phone_home"
        />
        <ContactElement
            labelText="Mobile:"
            value={mobile}
            onChange={handleInputChange}
            name="mobile"
        />
    </div>
</div>
)
}