//後端isLogin
module.exports = function (req, res, next) {
  const session_account = req.session.loginAccount
  if(session_account){
	  return res.status(200).send({account:session_account}); 
  }else{
	  return res.status(403).send({description:'未登入'}); 
  }
}