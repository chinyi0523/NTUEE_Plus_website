module.exports = (req, res, next) => {
    const session_account = req.session.loginAccount;
    if(session_account){
        next()
    }else{
        console.log("未登入");
        if(process.env.NODE_ENV==='development') next()
        else return res.status(403).send({description:"請登入"}) 
    }
}