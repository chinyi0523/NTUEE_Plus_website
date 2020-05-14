import React from 'react';
import './Recruitment_block.css';


const Recruitment_block = (props) =>{
    let recruit_image = props.data.image
    let recruit_title = props.data.title
    let recruit_info = props.data.info
    let recruit_description = props.data.description
    let id = props.data.id

    let visual_image = null
    if (recruit_image){
        visual_image = <Recruitment_image image={recruit_image} id={id+'_image'}/>
    }
    return(
        <div id="Recruitment_block_container">
            {visual_image}
            <Recruitment_title title={recruit_title} id={id+'_title'}/>
            <Recuritment_info info={recruit_info} id={id+'_info'}/>
            <Recruitment_description description={recruit_description} id={id+'_description'}/>
            
        </div>
    )
}

export default Recruitment_block;

const Recruitment_title = (props) => {
    let title = props.title;
    let id = props.id;
    return (
        <div>
            <h1 className='Recruitment_block_title' id={id}>{title}</h1>
        </div>
    )
}

const Recuritment_info = (props) =>{
    let company_name = props.info.company_name;
    let work_type = props.info.work_type;
	let salary = props.info.salary;
	let requirement = props.info.requirement
    let diploma = props.info.diploma
    let id = props.id
    return(
        <div>
            <p className="Recruitment_block_info">{company_name} | {work_type}</p>
            <p className="Recruitment_block_info">{salary} | {requirement} | {diploma}</p>
        </div>
    )
}

const Recruitment_description = (props) => {
    let description = props.description;
    let id = props.id
    return (
        <div>
            <p className='Recruitment_block_description' id={id}>{description}</p>
        </div>
    )
}

const Recruitment_image = (props) => {
    let image = props.image;
    let id = props.id;
    return(
        <div className="Recruitment_block_image_container">
            <img src={image} alt="Recruitment_block_image" className="Recruitment_block_image" id={id}/>
        </div>
    )
}