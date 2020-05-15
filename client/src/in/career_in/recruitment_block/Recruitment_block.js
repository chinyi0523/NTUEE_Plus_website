import React from 'react';
import './Recruitment_block.css';
import Recruitment_block_requirement from './Recruitment_requirement'



const Recruitment_block = (props) =>{
    let recruit_image = props.data.image
    let recruit_title = props.data.title
    let recruit_info = props.data.info
    let recruit_spec = props.data.spec
    let id = props.data.id

    let visual_image = null
    if (recruit_image){
        visual_image = <Recruitment_image image={recruit_image} id={id+'_image'}/>
    }
    return(
        <div id="Recruitment_block_container">
            <section>
                {visual_image}
                <Recruitment_title title={recruit_title} id={id+'_title'}/>
            </section>
            <section>
                <Recruitment_info info={recruit_info} id={id+'_info'}/>          
                <Recruitment_spec spec={recruit_spec} id={id+'_spec'}/>
            </section>
        </div>
    )
}

export default Recruitment_block;

const Recruitment_image = (props) => {
    let image = props.image;
    let id = props.id;
    return(
        <div className="Recruitment_block_image_container">
            <img src={image} alt="Recruitment_block_image" className="Recruitment_block_image" id={id}/>
        </div>
    )
}

const Recruitment_title = (props) => {
    let title = props.title.title;
    let company_name = props.title.company_name;
    let work_type = props.title.work_type;
    let id = props.id;
    return (
        <div className='Recruitment_block_title_container'>
            <p className='Recruitment_block_title' id={id}>{title}</p>
            <p className="Recruitment_block_subtitle">{company_name} | {work_type}</p>
        </div>
    )
}

const Recruitment_info = (props) =>{
	let salary = props.info.salary;
	let experience = props.info.experience;
    let diploma = props.info.diploma;
    let id = props.id;
    return(
        <div className="Recruitment_block_info_div">
            <p className="Recruitment_block_info">
                <td className="Recruitment_block_salary">{salary} </td>
                <td>  |  {experience} |  {diploma}</td>
            </p>
        </div>
    )
}

const Recruitment_spec = (props) => {
    let requirement = props.spec.requirement.split('\n').map(i => {
        return <li>{i}</li>
    });
    let description = props.spec.description.split('\n').map(i => {
        return <li>{i}</li>
    });
    let id = props.id;
    return (
        <div className="Recruitment_block_spec_div">
            <p className="Recruitment_block_requirement" id={id}>
                <li id ="Recruitment_requirement_li">要求條件：</li>
                {requirement}
            </p>
            <p className='Recruitment_block_requirement' id={id}>
                <li id ="Recruitment_requirement_li">說明：</li>
                {description}
            </p>
        </div>
    )
}

