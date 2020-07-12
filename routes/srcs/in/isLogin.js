//後端isLogin
module.exports = function (req, res, next) {
  const session_account = req.session.loginAccount
  if(session_account){
	  return res.send({status:'success',message:true, data:session_account}); 
  }else{
	  return res.send({status:'success',message:false}); 
  }
}