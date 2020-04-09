import axios from 'axios';

module.exports = function (filename){
	var toSend= {"filename",filename};
	axios.post("/api/getImg",
		toSend
	).then(res=>{
		if(res.data && res.data.message === true){
			return res.data.data;
		}else{
			console.log("讀取失敗或查無檔案");
			return false
		}
	})
}