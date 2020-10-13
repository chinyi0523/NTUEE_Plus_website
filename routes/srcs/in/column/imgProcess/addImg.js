const Column = require('../../../../Schemas/column');

module.exports = async function(name,file){
	await new Column({
		filename:name,
		columnImg:{
			data:file.buffer,
			contentType:file.mimetype
		}
	}).save();
	// console.log('get img=',column.columnImg.contentType)
    // column.save(function(err,res){
    //     if(err){
    //         console.log(err);
	// 		return false;
    //     }
    //     else{
	// 		console.log('成功儲存');
    //         console.log(res);
	// 		return true;
    //     }
    // })
}