import React from 'react';
import SocialElement, { ExpandRow } from './InputRow'

export default ({facebook,personal_website,Linkedin,handleInputChange,expandElement}) => {
const expand = (e) => {
    e.preventDefault();
    expandElement(
        "Profile_expand_social_media",
        "hr2",
        "Profile_expand_icon_2",
        "2rem",
        "1rem"
    );
}
return (
<div id="Profile_social_media">
    <ExpandRow
        labelClass="col-form-label col-4 Profile_info_label"
        inputClass="form-control col-6 ml-auto Profile_info_input"
        labelText="Facebook:"
        value={facebook}
        onChange={handleInputChange}
        name="facebook"
        expand={expand}
        imgID="Profile_expand_icon_2"
    />
    <div id="Profile_expand_social_media">
        <SocialElement
            labelText='Blog:'
            value={personal_website}
            onChange={handleInputChange}
            name="personal_website"
        />
        <SocialElement
            labelText='Linkedin:'
            value={Linkedin}
            onChange={handleInputChange}
            name="Linkedin"
        />
    </div>
</div>
)
}