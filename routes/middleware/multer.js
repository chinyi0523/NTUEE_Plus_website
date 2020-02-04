var multer = require('multer')

//參考網址
//https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-%E4%BD%BF%E7%94%A8-multer-%E5%AF%A6%E4%BD%9C%E5%A4%A7%E9%A0%AD%E8%B2%BC%E4%B8%8A%E5%82%B3-ee5bf1683113

module.exports=multer({
	fileFilter(req,file,cb){
		if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
			cb(new Error('Please upload an image'))
		}
		cb(null,true)
	}
})