import React from 'react';
import DiplomaElement, { ExpandRow } from './InputRow';

export default ({
    diploma_bachelor_major,
    diploma_bachelor_double_major,
    diploma_bachelor_minor,
    diploma_master,
    diploma_doctor,
    handleInputChange,
    expandElement
}) => { 
const expand = (e) => {
    e.preventDefault();
    expandElement(
        "Profile_expand_diploma",
        "hr41",
        "Profile_expand_icon_3",
        "1rem",
        "1rem"
    );
}
return (
<div id="Profile_diploma_container">
    <ExpandRow
        labelClass="col-form-label col-4 Profile_info_label"
        inputClass="form-control col-5 ml-auto offset-1 Profile_info_input"
        labelText="Bachelor Major:"
        value={diploma_bachelor_major}
        onChange={handleInputChange}
        name="diploma_bachelor_major"
        expand={expand}
        imgID="Profile_expand_icon_3"
    />
    <div id="Profile_expand_diploma">
        <DiplomaElement
            labelText="Double:"
            value={diploma_bachelor_double_major}
            onChange={handleInputChange}
            name="diploma_bachelor_double_major"
        />
        <DiplomaElement
            labelText="Minor:"
            value={diploma_bachelor_minor}
            onChange={handleInputChange}
            name="diploma_bachelor_minor"
        />
        <DiplomaElement
            labelText="Master:"
            value={diploma_master}
            onChange={handleInputChange}
            name="diploma_master"
        />
        <DiplomaElement
            labelText="Doctor:"
            value={diploma_doctor}
            onChange={handleInputChange}
            name="diploma_doctor"
        />
    </div>
</div>
)
}