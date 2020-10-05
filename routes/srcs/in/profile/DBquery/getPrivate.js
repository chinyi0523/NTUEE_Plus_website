const {D1,D2,D3} = require("./dataType");

module.exports = function(obj){
	const output = {}
	D1.forEach(element=>{
		output[element]=obj[element]
	})
	Object.entries(D2).forEach(([key,element])=>{
		output[element[0]] = obj[element[0]]
	})
	column3.forEach(element=>{
		output[element]=obj[element]
	})
	//console.log('user0=',output)
	if(obj.userimage.contentType){
		const prefix="data:"+obj.userimage.contentType+";base64,"
		const img = new Buffer(obj.userimage.data, 'binary').toString('base64');
		output.userimage = prefix+img;
	}
	return output
}