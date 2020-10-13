//srcs/chLogin.js
const Login = require('../../../Schemas/user_login');

module.exports = async function (req, res, next) {
    const session_account = req.session.loginAccount;
    let {oldPsw,newPsw} = req.body;
    oldPsw = crypto.createHash("md5").update(oldPsw).digest("hex");
    newPsw = crypto.createHash("md5").update(newPsw).digest("hex");
    try{
        const obj = await Login.findOne({account:session_account})
        if(!obj) return res.status(404).send({description:"帳號不存在"})
        if(obj.userpsw!==oldPsw) return res.status(401).send({description:"原始密碼錯誤"})
        await Login.updateOne(
            {account:session_account},
            {$set:{userpsw:newPsw}}
        )
        res.status(204).end();
    }catch(e){
        console.log(e)
        return res.status(500).send({description:"資料庫錯誤"})
    }
    // Login.find({account:session_account}, function(err, obj){
    // if (err) {
    //     console.log("Error:" + err);
    //     return res.status(500).send({description:"資料庫錯誤"}); 
    // }
    // else {
    //     if(obj.length === 1){
    //         console.log('發現帳號',obj);
    //         Login.updateOne({account:session_account},{$set:{question:NQ}},function(err,res){
    //             if (err) return res.status(500).send({description:'資料庫錯誤'});
    //         });
    //         res.status(204).end();
    //     }else{
    //         console.log("session:",session_account);
    //         res.status(404).send({status:'success',message:false, description:"帳號不存在或存在多個帳號"}); 
    //     }
    // }
    // })
}