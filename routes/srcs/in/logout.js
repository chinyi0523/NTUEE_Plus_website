//srcs/logout.js

module.exports = function (req, res, next) {
    req.session.destroy(function(err) {
		if(err){
			console.log("session destroy err\n",err);
			return res.send({status:'success',message:false,description:"session destroy失敗"});
		}
		return res.send({status:'success',message:true});
	})
}