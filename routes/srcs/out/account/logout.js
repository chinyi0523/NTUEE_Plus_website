//srcs/logout.js

module.exports = function (req, res, next) {
    req.session.destroy(function(err) {
		if(err){
			console.log("session destroy err\n",err);
			return res.status(500).send({description:"session destroy失敗"});
		}
		return res.status(204).end();
	})
}