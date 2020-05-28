import React from 'react';
import './Recommendation_block.css';
import Recommendation_block_requirement from './Recommendation_requirement'



const Recommendation_block = (props) =>{
    let recommend_image = props.data.image
    let recommend_title = props.data.title
    let recommend_info = props.data.info
    let recommend_spec = props.data.spec
    let id = props.data.id

    let visual_image = null
    if (recommend_image){
        visual_image = <Recommendation_image image={recommend_image} id={id+'_image'}/>
    }
    return(
        <div id="Recommendation_block_container">
            <section>
                {visual_image}
                <Recommendation_title title={recommend_title} id={id+'_title'}/>
            </section>
            <section>
                <Recommendation_info info={recommend_info} id={id+'_info'}/>          
                <Recommendation_spec spec={recommend_spec} id={id+'_spec'}/>
            </section>
        </div>
    )
}

export default Recommendation_block;

const Recommendation_image = (props) => {
    let image = props.image;
    let id = props.id;
    return(
        <div className="Recommendation_block_image_container">
            <img src={image} alt="Recommendation_block_image" className="Recommendation_block_image" id={id}/>
        </div>
    )
}

const Recommendation_title = (props) => {
    let title = props.title.title;
    let name = props.title.name;
    let desire_work_type = props.title.desire_work_type;
    let id = props.id;
    return (
        <div className='Recommendation_block_title_container'>
            <p className='Recommendation_block_title' id={id}>{title}</p>
            <p className="Recommendation_block_subtitle">{name}  asking for  {desire_work_type}</p>
        </div>
    )
}

const Recommendation_info = (props) =>{
	let contact = props.info.contact;
	let email = props.info.email;
    let diploma = props.info.diploma;
    let id = props.id;
    return(
        <div className="Recommendation_block_info_div">
            <p className="Recommendation_block_info">
                <td className="Recommendation_block_salary">{diploma} </td>
                <td>  |  {contact} |  {email}</td>
            </p>
        </div>
    )
}

const Recommendation_spec = (props) => {
    let experience = props.spec.experience.split('\n').map(i => {
        return <li>{i}</li>
    });
    let speciality = props.spec.speciality.split('\n').map(i => {
        return <li>{i}</li>
    });
    let id = props.id;
    return (
        <div className="Recommendation_block_spec_div">
            <p className="Recommendation_block_requirement" id={id}>
                <li id ="Recommendation_requirement_li">個人簡歷：</li>
                {experience}
            </p>
            <p className='Recommendation_block_requirement' id={id}>
                <li id ="Recommendation_requirement_li">專業技能：</li>
                {speciality}
            </p>
        </div>
    )
}
