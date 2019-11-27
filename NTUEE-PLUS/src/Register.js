import React, { Component } from 'react';
import './Register.css';
import eesa_icon from './images/eesa-icon.png';

class Register extends Component{
    render(){
        return(
            <div id="Register_container">
                <div id="Register_register_table">
                    <h1 id="Register_table_title">Just A Few Steps to Join EE+!</h1>
					<form id="signupForm">
                    <div id="Register_table">
                        <div id="Register_input1">
                            <p id="Register_realname_label">Your Name</p>
                            <input name="Register_realname" id="Register_realname" placeholder="Your Chinese Name"></input>
                        </div>
                        <div id="Register_input2">
                            <p id="Register_ID_label">Student ID</p>
                            <input name="Register_student_id" id="Register_student_id" placeholder="Student ID"></input>
                        </div>
                        <div id="Register_input3">
                            <p id="Register_password_label">Password</p>
                            <input name="Register_password" id="Register_password" placeholder="Set Your Password" type="password"></input>
                        </div>
                        <div id="Register_input4">
                            <p id="Register_confirm_password_label">Confirm Password</p>
                            <input name="Register_confirm_password" id="Register_confirm_password" placeholder="Confirm Your Password" type="password"></input>
                        </div>
                    </div>
                    <button id="Register_register_button"><p id="Register_register_text">Register</p></button>
					</form>
                </div>
                <div id="Register_FAQ">
                    <div id="Register_FAQ_title">FAQ</div>
                    <div id="Register_splitline"></div>
                    <div id="Register_FAQ_content">
                        <ul id="Register_FAQ_list">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
			<script>
				$(document).ready(function(){
					$("#signupForm").validate({
							rules: {
								Register_student_id: {
									required: true,
									minlength: 9,
									maxlength: 9
								},
								Register_password: {
									required: true,
									minlength: 5
								},
								Register_confirm_password: {
									required: true,
									minlength: 5,
									equalTo: "#password"
								},
								agree:"required"
							},
							messages: {
								Register_student_id: {
									required: "請輸入學號",
									minlength: "學號長度錯誤",
									maxlength: "學號長度錯誤"
								},
								Register_password: {
									required: "請輸入密碼",
									minlength: "密碼長度只少5個字元"
								},
								Register_confirm_password: {
									required: "請輸入密碼",
									minlength: "密碼長度至少5個字元",
									equalTo: "兩段密碼不一致"
								}
							}
					});

					$("#Register_register_button").click(function(){
						var username = $('#Register_realname').val();
						var account = $('#Register_student_id').val();
						var password = $('#Register_password').val();
						//这里实现对 username和password格式的判断
						//........
						//发送ajax请求 使用post方式发送json字符串给后台login
						$.ajax({
							type: "post",
							url: "http://localhost:1993/api/register",
							dataType: "json",
							data:{ username: username, account:account, password: password },
							success: function(data){
							//接受返回的数据，前端判断采取的动作
							console.log(data);
							if(data){
								if(data.message==false){
								alert('帳號已存在');
								window.location.href="#";
								}else{
								alert('註冊成功');
								window.location.href="#";
								}
							}
							}
						});
					});
				});
			</script>
        )
    }
}
export default Register