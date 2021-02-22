const { ErrorHandler } = require("../../../error");
const env = require('dotenv')
env.config()

module.exports = (req, res, next) => {
    const session_account = req.session.loginAccount;
    if(session_account){
        next()
    }else{
        console.log("not login.",process.env.NODE_ENV==='development'&&'dev mode,accept')
        if(process.env.NODE_ENV==='development') next()
        else throw new ErrorHandler(403,'未登入')
    }
}