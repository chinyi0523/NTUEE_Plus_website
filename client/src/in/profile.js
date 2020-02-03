import React, { Component } from 'react';
import './profile.css';
import default_image from '../images/left_image.png';
import axios from 'axios';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            Profile_realname : "",
            //Profile_studentID : "",
            Profile_email : "",
            Profile_phone_company : "",
            Profile_phone_home : "",
            Profile_mobile : "",
            Profile_address : "",
            Profile_personal_website : "",
            Profile_FB : "",
            Profile_Linkedin : "",
            Profile_diploma_bachelor_major : "",
            Profile_diploma_bachelor_minor : "",
            Profile_diploma_bachelor_double_major : "",
            Profile_diploma_master : "",
            Profile_diploma_doctor : "",
            Profile_shortintro : ""
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
		this.handleCheckChange = this.handleCheckChange.bind(this)
    }
	
	componentDidMount(){
		this.showVisual();
	}
	
	showVisual(){
		axios.post("/api/showVisual", 
			{}
		).then(res => {
			console.log(res.data);
				if(res.data){
					if(res.data.message===true){
						var D = res.data.data;
						console.log("Name=",D.username.data);
						this.setState({
							Profile_realname_checkbox:D.username.show,
							Profile_realname:D.username.data,
							Profile_shortintro:D.profile.data,
							Profile_email:D.publicEmail.data,
							Profile_phone_company:D.office.data,
							Profile_mobile:D.cellphone.data,
							Profile_address:D.CC.data
						});
					}else{
						alert('錯誤：\n'+res.data.description);
					}
				}
		})
	}
	
	handleCheckChange=(event)=>{
		const target = event.target;
		const name = target.name;
		this.setState({
			[name]:!this.state[name]
		})
		console.log(this.state[name])
	}
	
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name);
        console.log(value);

        this.setState({
            [name]:value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        /*alert("fine");*/
        if(false){
            alert("一些判斷式") //validation
        }else{
            var r = window.confirm("確認更改?");
            if (r){
                axios.post('/api/chVisual'
                ,
                {
				"username.show": this.state.Profile_realname_checkbox,
                "username.data": this.state.Profile_realname,
                "nickname.data" : "",
                "profile.data" : this.state.Profile_shortintro,
                education:[
                    {
                        SD : this.state.Profile_diploma_bachelor_major,
                        Note : "",
                    }
                ],
                'publicEmail.data' : this.state.Profile_email,
                'office.data' : this.state.Profile_phone_company,
                'cellphone.data' : this.state.Profile_mobile,
                'CC.data' : this.state.Profile_address,
                Occupation:[
                    "",
                    ""
                ],
                JobID:""
                }).then(res => {
                    console.log(res.data);
                        if (res.data){
                            if (res.data.message === true){ 
                                alert("修改成功!");
                                //window.location = ? in's router hasn't done yet
                            }else{
                                alert("錯誤: \n"+res.data.description);
                            }

                        }
                })
            }
        }
    }
    render(){
        return (
            <div id="Profile_container">
                <div id="Profile_information">
                <p id="Profile_public">Public</p>
                <form id="Profile_loginform" onSubmit={this.handleSubmit}>
                    
                    <img id="Profile_userimage" src={default_image} alt="Profile_image" />
                
                    <div id="Profile_info">
                        <div id="Profile_small_cont1">
                            <p id="Profile_realname_tag">RealName:</p>
                            <input type="checkbox" id="Profile_realname_checkbox"
								checked = {this.state.Profile_realname_checkbox}
								onChange = {this.handleCheckChange}
								name="Profile_realname_checkbox"></input>
                            <input type="text" id="Profile_realname" value = {this.state.Profile_realname} onChange = {this.handleInputChange} name="Profile_realname"></input>
                        </div>
                        <div>
                            <p id="Profile_shortintro_tag">簡介:</p>
                            <textarea id="Profile_shortintro" name="Profile_shortintro" placeholder="briefly introduce yourself!" value = {this.state.Profile_shortintro} onChange = {this.handleInputChange}></textarea>
                        </div>
                    </div>
                    <div id="hr1">How to Contact</div> 
                    <div id="Profile_more_info">
                        <div>
                        <p id="Profile_email_tag">E-mail:</p>
                        <input type="checkbox"></input>
                        <input type="email" id="Profile_email" value = {this.state.Profile_email} onChange = {this.handleInputChange} name="Profile_email"></input>
                        </div>
                        <div>
                        <p id="Profile_phone_company_tag">Phone(Company):</p>
                        <input type="checkbox"></input>
                        <input id="Profile_phone_company" value = {this.state.Profile_phone_company} onChange = {this.handleInputChange} name="Profile_phone_company"></input>
                        </div>
                        <div>
                        <p id="Profile_phone_home_tag">Phone(Home):</p>
                        <input type="checkbox"></input>
                        <input id="Profile_phone_home" value = {this.state.Profile_phone_home} onChange = {this.handleInputChange} name="Profile_phone_home"></input>
                        </div>
                        <div>
                        <p id="Profile_mobile_tag">Mobile:</p>
                        <input type="checkbox"></input>
                        <input id="Profile_mobile" value = {this.state.Profile_mobile} onChange = {this.handleInputChange} name="Profile_mobile"></input>
                        </div>
                        <div>
                        <p id="Profile_address_tag">Living Address:</p>
                        <input type="checkbox"></input>
                        <input type="address" id="Profile_address" value = {this.state.Profile_address} onChange = {this.handleInputChange} name="Profile_address"></input>
                        </div>
                        <div>
                        <p id="Profile_personal_website_tag">Blog:</p>
                        <input type="checkbox"></input>
                        <input id="Profile_personal_website" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_personal_website"></input>
                        </div>
                        <div>
                        <p id="Profile_FB_tag">Facebook:</p>
                        <input type="checkbox"></input>
                        <input id="Profile_FB" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_FB"></input>
                        </div>
                        <div>
                        <p id="Profile_Linkedin_tag">Linkedin:</p>
                        <input type="checkbox"></input>
                        <input id="Profile_Linkedin" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_Linkedin"></input>
                        </div>
                <div id="hr2">Diploma</div>
                        <div>
                            <div style={{marginBottom:"2%"}}></div>
                            <div id="Profile_diploma">
                                    <table id="Profile_diploma_choosebox_table">
                                        <tr style={{marginBottom:"10%"}}>
                                            <td colSpan="2" style={{paddingLeft:"0"}}>Bachelor Major: </td>
                                            <td colSpan="2" style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                <input type="checkbox" id="Profile_bachelor_major_checkbox"></input>
                                                <input id="Profile_diploma_bachelor_major" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_diploma_bachelor_major"></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="Profile_diploma_choosebox1" style={{paddingLeft:"0"}}>雙: </td>
                                            <td style={{paddingBottom:"0"}}>
                                                <input id="Profile_diploma_bachelor_double_major" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_diploma_bachelor_double_major"></input>
                                            </td>
                                            <td id="Profile_diploma_choosebox2" >輔: </td>
                                            <td style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                <input id="Profile_diploma_bachelor_minor" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_diploma_bachelor_minor"></input>
                                                <input type="checkbox" id="Profile_bachelor_double_and_minor"></input>
                                                </td>
                                                
                                        </tr>
                                        <tr>
                                            <td colSpan="2" style={{paddingLeft:"0"}}>Master: </td>
                                            <td colSpan="2" style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                <input type="checkbox" id="Profile_master_checkbox"></input>
                                                <input id="Profile_diploma_master" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_diploma_master" ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" style={{paddingLeft:"0"}}>Doctor: </td>
                                            <td colSpan="2" style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                <input type="checkbox" id="Profile_doctor_checkbox"></input>
                                                <input id="Profile_diploma_doctor" value = {this.state.value} onChange = {this.handleInputChange} name="Profile_diploma_doctor"></input>
                                            </td>
                                        </tr>
                                    </table>
                                
                                                                                                         
                            </div>
                        </div>
                        
                        
                        <input id="Profile_submit_btn" type="submit" value="Update Profile" />
                        
                    </div>
                
                </form>
                </div>
                
                <div id="Profile_latest_news">
                    <h2 style={{marginTop:"0"}}>Latest News:</h2>
                    <div id="Profile_divider"></div>
                    <div id="Profile_news_renderer">
                        <a id="Profile_subtitle1" href="#">Subtitle1...</a>
                        <p id="Profile_date1">Date1</p>
                        <a id="Profile_subtitle2" href="#">Subtitle2...</a>
                        <p id="Profile_date2">Date2</p>
                        <a id="Profile_subtitle3" href="#">Subtitle3...</a>
                        <p id="Profile_date3">Date3</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Profile