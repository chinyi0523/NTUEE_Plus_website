const { ErrorHandler } = require("../../error");

module.exports = (req, res, next) => {
    const session_account = req.session.loginAccount;
    if(session_account){
        next()
    }else{
        console.log("未登入")
        if(process.env.NODE_ENV==='development' || true) next()
        else throw new ErrorHandler(403,'未登入')
    }
}