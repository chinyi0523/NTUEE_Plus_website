const validationFields = require('./validFields')

const validationList = function(method){
	const output = [];
	validationFields[method].forEach(element=>{
		output.push(require("./Name/"+element));
	});
	return output;
}

module.exports=(method)=>validationList(method);
