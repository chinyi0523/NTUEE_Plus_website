module.exports = (req, res, next) => {
    const session_account = req.session.loginAccount;
    if(session_account){
        next();
    }else{
        //return res.redirect(303, '/Login')
        return res.send({status:'success',message:false, description:"請登入"}); 
        //console.log("未登入");
        //next();
    }
  }