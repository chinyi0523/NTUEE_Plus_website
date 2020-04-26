import axios from 'axios';

export function getImg (filename){
	var toSend= {"filename":filename};
	console.log(filename)
	axios.post("/api/getImg",
		toSend
	).then(res=>{
		if(res.data && res.data.message === true){
			console.log(res)
			// return res.data.data;
			this.setState({
				img:res.data.data,
			})

		}else{
			console.log("讀取失敗或查無檔案");
			console.log(res.data.description)
			return false
		}
	})
}