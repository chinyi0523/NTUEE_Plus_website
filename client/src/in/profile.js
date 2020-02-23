import React,{ Component } from 'react';
import ReactDOM from "react-dom";
import './profile.css';
import default_image from '../images/default_image.png';
import axios from 'axios';

//import { NavBar } from '../component/AppBar';
//import ReactDOM from 'react-dom';

const map = [
		["userimage","userimage",default_image],
		["realname_checkbox","username.show"],
		["realname","username.data"],
		["nickname_checkbox","nickname.show"],
		["nickname","nickname.data"],
		["shortintro","profile.data"],
		["email_checkbox","profile.show"],
		["email","publicEmail.data"],
		["phone_company_checkbox","office.show"],
		["phone_company","office.data"],
		["phone_home_checkbox","homephone.show"],
		['phone_home','homephone.data'],
		['mobile_checkbox','cellphone.show'],
		['mobile','cellphone.data'],
		['address_checkbox','CC.show'],
		['address','CC.data'],
		['personal_website_checkbox','web.show'],
		['personal_website','web.data'],
		['facebook_checkbox','facebook.show'],
		['facebook','facebook.data'],
		['Linkedin_checkbox','Linkedin.show'],
		['Linkedin','Linkedin.data'],
		['major_checkbox','education.major.show'],
		['diploma_bachelor_major','education.major.SD'],
		['diploma_bachelor_double_major','education.double_major.SD'],
		['diploma_bachelor_minor','education.minor.SD'],
		['dm_checkbox','education.double_major.show'],
		['diploma_master','education.master.SD'],
		['master_checkbox','education.master.show'],
		['diploma_doctor','education.doctor.SD'],
		['doctor_checkbox','education.doctor.show']
	]


class Profile extends Component{
	
    constructor(props){
        super(props);
        var tmpCh = {}
		map.forEach(element=>{
			tmpCh[element[0]] = false
		})
		
		this.state = {
            clicktime : 0,
            userimage : {default_image},
            imagePreviewUrl:"",
            realname : "",
            nickname : "",
            email : "",
            phone_company : "",
            phone_home : "",
            mobile : "",
            address : "",
            personal_website : "",
            facebook : "",
            Linkedin : "",
            diploma_bachelor_major : "",
            diploma_bachelor_minor : "",
            diploma_bachelor_double_major : "",
            diploma_master : "",
            diploma_doctor : "",
            shortintro : "",
            work_O_1:"",
            work_P_1:"",
            work_C_1:"",
            
            work_O_2:"",
            work_P_2:"",
            work_C_2:"",
            
            work_O_3:"",
            work_P_3:"",
            work_C_3:"", //will add button to add work experience
			hasChanged:tmpCh,
        };

        this.handleInputChange = this.handleInputChange.bind(this)
		this.handleCheckChange = this.handleCheckChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.expandDiploma = this.expandDiploma.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.test = this.test.bind(this);
    }
    
	
	
    expandDiploma(event){
        event.preventDefault();
        if (this.state.clicktime % 2 === 0){
            document.getElementById("hr3").style.marginTop = "30%";
            document.getElementById("hr3").style.transitionDuration = "0.5s";
            document.getElementById("Profile_expand").style.transitionDuration = "0.5s";
            document.getElementById("Profile_expand").style.transitionProperty = "opacity";
            setTimeout(()=>{
                document.getElementById("Profile_expand").style.display = "block";
                
            },1);
            document.getElementById("Profile_expand").style.opacity = "0";
            setTimeout(()=>{document.getElementById("Profile_expand").style.opacity = "1";},100);
            
        //document.getElementById("Profile_expand").style.border = "gray 2px solid"
        }else{
            document.getElementById("hr3").style.transitionDuration = "0.5s";
            document.getElementById("Profile_expand").style.transitionDuration = "0.5s";
            document.getElementById("hr3").style.marginTop = "2%";
            document.getElementById("Profile_expand").style.opacity = "0";
            setTimeout(()=>{
                document.getElementById("Profile_expand").style.display = "None";
            },500);
            /*ReactDOM.render(
                <div></div>,document.getElementById("Profile_expand")
            )*/
            
            
        }
        this.setState({clicktime:this.state.clicktime+1})
        
    };
    test = () => (
        document.getElementById("Profile_expand").style.opacity = "0"
    );

    
    componentWillMount(){
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
						var sta = {}
						map.forEach(elements=>{
							//(elements[0]==="userimage") && (elements
							var arr = elements[1].split('.')
							var val = D;
							var i;
							for(i=0;i<arr.length;i++){
								val = val[arr[i]];
								if(val===undefined){
									val=(elements.length<=2)?'':elements[2]
									break
								}
							}
							sta[elements[0]]=val;
						})
						sta.imagePreviewUrl = sta.userimage;
						console.log('sta=',sta)
						this.setState(sta);
					}else{
						alert('錯誤：\n'+res.data.description);
					}
				}
		})
	};
	handleImageChange(e){
        //e.preventDefault();
        let reader = new FileReader();
		if(e.target.files.length===0) return;
        let file = e.target.files[0];
        this.setState({
            userimage:file
        })

        reader.onloadend = () =>{
            console.log("onloadend");
			this.setState({
				imagePreviewUrl:reader.result
			});
        }
        try {
            reader.readAsDataURL(file)
        } catch (error) {
            
        }
		var hasChanged = {...this.state.hasChanged}
		hasChanged.userimage = true;
		this.setState({hasChanged})
    }

	handleCheckChange(event){
		const target = event.target;
        const name = target.name;

        this.setState({
            [name]:!this.state[name]
        });
		var hasChanged = {...this.state.hasChanged}
		hasChanged[name] = true;
		this.setState({hasChanged})
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
		var hasChanged = {...this.state.hasChanged}
		hasChanged[name] = true;
		this.setState({hasChanged})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        alert("fine");
        if(false){
            alert("一些判斷式") //validation
        }else{
            var r = window.confirm("確認更改?");
            if (r){
				var sta= new FormData();
				map.forEach(elements=>{
					if(this.state.hasChanged[elements[0]] && this.state[elements[0]]!==undefined){
						sta.append(elements[1],this.state[elements[0]])
					}
					//sta[elements[1]]=this.state[elements[0]]//資料形式從{}改成FormData
				})
				console.log('sta',sta)
				const config = {
					headers: {
						'content-type': 'multipart/form-data'
					}
				};
                axios.post("/api/chVisual"
                ,
				sta
                /*{
				"username.show": this.state.realname_checkbox,
                "username.data": this.state.realname,
                "nickname.data" : this.state.,
                "profile.data" : this.state.shortintro,

                education:[
                    {
                        SD : this.Profile_diploma_bachelor_major,
                        Note : "",
                    }
                ],
                publicEmail : this.Profile_email,
                office : this.Profile_phone_company,
                cellphone : this.Profile_mobile,
                CC : this.Profile_address,
                Occupation:[
                    "",
                    ""
                ],
                JobID:this.state.JobID
                }*/,
				config
				).then(res => {

                    console.log(res.data);
                        if (res.data){
                            if (res.data.message === true){ 
                                alert("修改成功!");
									var hasChanged = {...this.state.hasChanged}
									map.forEach(element=>{
										hasChanged[element[0]] = false;
									})
									this.setState({hasChanged});
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
        
        {/*let imagePreviewUrl = this.state.imagePreviewUrl;
        let $imagePreview = null;
        if (imagePreviewUrl){
			console.log('use it!')
            $imagePreview = (<img src={this.state.imagePreviewUrl} id="Profile_userimage" alt="userimage"></img>)
        }else{
			console.log('use default')
            $imagePreview = (<img src={default_image} id="Profile_userimage" alr="userimage"></img>)
        }*/}
        return (
            <div id="Profile_container">
                <div id="hr0">Profile Setting</div>
                <div id="Profile_information">
                <p id="Profile_public">Public</p>
                <form id="Profile_loginform" onSubmit={this.handleSubmit}>
                    <div id="Profile_userimage_container">
					{/*$imagePreview*/}
						<img src={this.state.imagePreviewUrl} id="Profile_userimage" alt="userimage"></img>
                        <label id="Profile_userimage_change">
                        <input type="file"
                         onChange = {this.handleImageChange}
                         name = "userimage"
						 accept = "image/*"
                         style = {{display:"none"}}></input>
                         <span id="Profile_addImage_icon">➕ <p style={{display:"inline",fontSize:"14px"}}>Add Head Shot</p></span>
                        </label>
                    </div>
                    
                    <div id="Profile_info">
                        <div id="Profile_small_cont1">
                            <p id="Profile_realname_tag">RealName:</p>
                            <input type="checkbox" id="Profile_realname_checkbox" 
							checked = {this.state.realname_checkbox}
                            onChange = {this.handleCheckChange}
							name="realname_checkbox"></input>
                            <input type="text" id="Profile_realname" value = {this.state.realname} onChange = {this.handleInputChange} name="realname"></input>
                        </div>
                        <div id="Profile_small_cont2">
                            <p id="Profile_nickname_tag">Nickname:</p>
                            <input type="checkbox" id="Profile_nickname_checkbox"
							checked = {this.state.nickname_checkbox}
                            onChange = {this.handleCheckChange}
							name="nickname_checkbox"></input>
                            <input type="text" id="Profile_nickname" value = {this.state.nickname} onChange = {this.handleInputChange} name="nickname"></input>
                        </div>
                        <div>
                            <p id="Profile_shortintro_tag">簡介:</p>
                            <textarea id="Profile_shortintro" name="shortintro" placeholder="briefly introduce yourself!" value = {this.state.shortintro} onChange = {this.handleInputChange}></textarea>
                        </div>
                    </div>
                    <div id="hr1">How to Contact</div> 
                    <div id="Profile_more_info">
                        <div>
                        <p id="Profile_email_tag">E-mail:</p>
                        <input type="checkbox"
						checked = {this.state.email_checkbox}
                        onChange = {this.handleCheckChange}
						name="email_checkbox"
						></input>
                        <input type="email" id="Profile_email" value = {this.state.email} onChange = {this.handleInputChange} name="email"></input>
                        </div>
                        <div>
                        <p id="Profile_phone_company_tag">Phone(Company):</p>
                        <input type="checkbox"
							checked = {this.state.phone_company_checkbox}
							onChange = {this.handleCheckChange}
							name="phone_company_checkbox"
						></input>
                        <input id="Profile_phone_company" value = {this.state.phone_company} onChange = {this.handleInputChange} name="phone_company"></input>
                        </div>
                        <div>
                        <p id="Profile_phone_home_tag">Phone(Home):</p>
                        <input type="checkbox"
							checked = {this.state.phone_home_checkbox}
							onChange = {this.handleCheckChange}
							name="phone_home_checkbox"
						></input>
                        <input id="Profile_phone_home" value = {this.state.phone_home} onChange = {this.handleInputChange} name="phone_home"></input>
                        </div>
                        <div>
                        <p id="Profile_mobile_tag">Mobile:</p>
                        <input type="checkbox"
							checked = {this.state.mobile_checkbox}
							onChange = {this.handleCheckChange}
							name="mobile_checkbox"
						></input>
                        <input id="Profile_mobile" value = {this.state.mobile} onChange = {this.handleInputChange} name="mobile"></input>
                        </div>
                        <div>
                        <p id="Profile_address_tag">Living Address:</p>
                        <input type="checkbox"
							checked = {this.state.address_checkbox}
							onChange = {this.handleCheckChange}
							name="address_checkbox"
						></input>
                        <input type="address" id="address" value = {this.state.address} onChange = {this.handleInputChange} name="address"></input>
                        </div>
                        <div>
                        <p id="Profile_personal_website_tag">Blog:</p>
                        <input type="checkbox"
							checked = {this.state.personal_website_checkbox}
							onChange = {this.handleCheckChange}
							name="personal_website_checkbox"
						></input>
                        <input id="Profile_personal_website" value = {this.state.personal_website} onChange = {this.handleInputChange} name="personal_website"></input>
                        </div>
                        <div>
                        <p id="Profile_FB_tag">Facebook:</p>
                        <input type="checkbox"
							checked = {this.state.facebook_checkbox}
							onChange = {this.handleCheckChange}
							name="facebook_checkbox"
						></input>
                        <input id="Profile_FB" value = {this.state.facebook} onChange = {this.handleInputChange} name="facebook"></input>
                        </div>
                        <div>
                        <p id="Profile_Linkedin_tag">Linkedin:</p>
                        <input type="checkbox"
							checked = {this.state.Linkedin_checkbox}
							onChange = {this.handleCheckChange}
							name="Linkedin_checkbox"
						></input>
                        <input id="Profile_Linkedin" value = {this.state.Linkedin} onChange = {this.handleInputChange} name="Linkedin"></input>
                        </div>
                <div id="hr2">Diploma</div>
                        <div id="Profile_diploma_container">
                            <div style={{marginBottom:"2%"}}></div>
                            <div id="Profile_diploma">
                                    <table id="Profile_diploma_choosebox_table">
                                        <tr>
                                            <td colSpan="2" style={{paddingLeft:"0"}}>Bachelor Major: </td>
                                            <td colSpan="2" style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                <input type="checkbox" id="Profile_bachelor_major_checkbox"
												checked = {this.state.major_checkbox}
												onChange = {this.handleCheckChange}
												name="major_checkbox"></input>
                                                
                                                <input id="Profile_diploma_bachelor_major" value = {this.state.diploma_bachelor_major} onChange = {this.handleInputChange} name="diploma_bachelor_major"></input>
                                            </td>
                                            <td style={{paddingLeft:"10%"}}><button id="Profile_diploma_expand_button" onClick={this.expandDiploma}>Expand</button></td>

                                        </tr>
                                        <div id="Profile_expand">
                                            <table cellPadding="15">
                                        <tr>
                                                <td id="Profile_diploma_choosebox1" style={{paddingLeft:"0"}}>Double: </td>
                                                <td style={{paddingBottom:"0"}}>
                                                    <input id="Profile_diploma_bachelor_double_major" value = {this.state.diploma_bachelor_double_major} onChange = {this.handleInputChange} name="diploma_bachelor_double_major"></input>
                                                </td>
                                                <td id="Profile_diploma_choosebox2" >Minor: </td>
                                                <td style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                    <input id="diploma_bachelor_minor" value = {this.state.diploma_bachelor_minor} onChange = {this.handleInputChange} name="diploma_bachelor_minor"></input>
                                                    <input type="checkbox" id="Profile_bachelor_double_and_minor"
                                                    checked = {this.state.dm_checkbox}
                                                    onChange = {this.handleCheckChange}
                                                    name="dm_checkbox"></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style={{paddingLeft:"0"}}>Master: </td>
                                                <td colSpan="2" style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                    <input type="checkbox" id="Profile_master_checkbox"
                                                    checked = {this.state.master_checkbox}
                                                    onChange = {this.handleCheckChange}
                                                    name="master_checkbox"></input>
                                                    <input id="Profile_diploma_master" value = {this.state.diploma_master} onChange = {this.handleInputChange} name="diploma_master" ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style={{paddingLeft:"0"}}>Doctor: </td>
                                                <td colSpan="2" style={{paddingRight:"0",paddingLeft:"6px",paddingBottom:"0"}}>
                                                    <input type="checkbox" id="Profile_doctor_checkbox"
                                                    checked = {this.state.doctor_checkbox}
                                                    onChange = {this.handleCheckChange}
                                                    name="doctor_checkbox"
                                                    ></input>
                                                    <input id="Profile_diploma_doctor" value = {this.state.diploma_doctor} onChange = {this.handleInputChange} name="diploma_doctor"></input>
                                                </td>
                                            </tr>
                                            </table>
                                        </div>
                                    </table>
                            </div>   
                        </div>
                        <div id="hr3">Work Experience</div>
                        <div id="Profile_occupation_container">
                            <table id="Profile_occupation_table" cellPadding="9">
                                <thead >
                                    <tr style={{borderBottom:"2px white solid"}}>
                                        <th>Occupation</th>
                                        <th>Position</th>
                                        <th>Company</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td><input placeholder="Front-End" name="work_O_1" 
                                    value = {this.state.work_O_1} onChange = {this.handleInputChange}></input></td>
                                    <td><input placeholder="Sub-Leader" name="work_P_1" 
                                    value = {this.state.work_P_1} onChange = {this.handleInputChange}></input></td>
                                    <td><input placeholder="NTUEE+" name="work_C_1" 
                                    value = {this.state.work_C_1} onChange = {this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><input name="work_O_2"
                                    value = {this.state.work_O_2} onChange = {this.handleInputChange}></input></td>
                                    <td><input name="work_P_2"
                                    value = {this.state.work_P_2} onChange = {this.handleInputChange}></input></td>
                                    <td><input name="work_C_2"
                                    value = {this.state.work_C_2} onChange = {this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><input name="work_O_3"
                                    value = {this.state.work_O_3} onChange = {this.handleInputChange}></input></td>
                                    <td><input name="work_P_3"
                                    value = {this.state.work_P_3} onChange = {this.handleInputChange}></input></td>
                                    <td><input name="work_C_3"
                                    value = {this.state.work_C_3} onChange = {this.handleInputChange}></input></td>
                                </tr>
                            </table>
                            <div style={{marginTop:"5%",height:"7vh"}}>
                                <p>Job ID</p>
                                <input id="Profile_JobID" name="JobID" value = {this.state.JobID} onChange = {this.handleInputChange}></input>
                            </div>
                        </div>         
                   <input id="Profile_submit_btn" type="submit" value="Update Profile" />
                    </div>
                    
                
                </form>
                </div>
                
                {/*<div id="Profile_latest_news">
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

        </div>*/}
            </div>
        )
    }
}
export default Profile