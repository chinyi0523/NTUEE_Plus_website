//前端isLogin
import axios from 'axios';

export function isLoginChecker(){
	axios.post("/api/isLogin",
		{}
	).then(res=>{
		if(res.data && res.data.message === true){
			console.log("登入者",res.data.data);
			return true;
		}else{
			console.log("未登入");
			return false;
		}
	})
}