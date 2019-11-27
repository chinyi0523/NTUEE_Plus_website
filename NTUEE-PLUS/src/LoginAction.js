$(document).ready(function(){
					$("#loginForm").validate({
							rules: {
								Login_username_input: {
									required: true,
									minlength: 9,
									maxlength: 9
								},
								Login_password_input: {
									required: true,
									minlength: 5
								},
								agree:"required"
							},
							messages: {
								Login_username_input: {
									required: "請輸入學號",
									minlength: "學號長度錯誤",
									maxlength: "學號長度錯誤"
								},
								Login_password_input: {
									required: "請輸入密碼",
									minlength: "密碼長度只少5個字元"
								}
							}
					});

					//设置cookie
					  /*function setCookie(name,psw,idate){
						var oDate = new Date();
						oDate.setDate(oDate.getDate()+idate)
						document.cookie = name+'='+psw+';expires'+idate;
					  }
					  //读取cookie
					  function getCookie(key){
						var arr = document.cookie.split(';')
						for(var i=0;i<arr.length;i++){
						  var arr2 = arr[i].split('=');
						  if(arr2[0]==key){
							return arr2[1];
						  }
						}
						return '';
					  }*/
					//如果有存入的cookie,取出账户名显示在input框;
					 //$('#loginusername').val(getCookie('username'));
					//查询数据库确认账户密码是否正确
					 $("#Login_button").click(function(){
						console.log("running??");
						var account=$('#Login_username_input').val();
						var password=$('#Login_password_input').val();
						//这里实现对 username和password格式的判断
						//........
						//发送ajax请求 使用post方式发送json字符串给后台login
						$.ajax({
							type: "post",
							url: "http://localhost:1993/api/login",
							dataType: "json",
							data:{ account:account, password: password },
							success: function(data){
							//接受返回的数据，前端判断采取的动作
							  console.log(data.data);
							  if(data){
								  if(data.message==false){
									window.location.href="#";
									alert('帳號密碼錯誤')
								  }else{
									alert('登入成功，歡迎 '+data.data.username);
									//登录成功将用户名存入cookie;
									/*if($('#mycheck').prop('checked')==true){
									  setCookie('username',username,7);
									}*/
									window.location.href="#";
								  }
							  }
							}
						});
					});
				})