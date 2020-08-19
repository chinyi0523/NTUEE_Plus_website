import axios from 'axios';

export function axios(url, data, next){
	axios.post(url, 
		data
    ).then(res => {
        if(res.data.message === false && res.data.description === "請登入"){
            alert('請重新登入');
            return window.location = "/Login";
        }
        else{
            next(res.data);
        }
    })
}
