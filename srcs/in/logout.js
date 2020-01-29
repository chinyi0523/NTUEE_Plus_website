//srcs/logout.js

module.exports = function (req, res, next) {
    req.session.destroy(function(err) {
		if (err) return res.send({status:'success',message:false,description:err});
		return res.send({status:'success',message:true});
	})
}