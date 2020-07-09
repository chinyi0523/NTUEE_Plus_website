import axios from 'axios';

export function saveImg(filename,img){
	const toSend= new FormData();
	toSend.append("filename",filename);
	toSend.append("file",img);
	axios.post("/api/saveImg",
		toSend,
		{
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
	).then(res=>{
		if(res.data && res.data.message === true){
			return true
		}else{
			console.log("儲存失敗");
			return false
		}
	})
}