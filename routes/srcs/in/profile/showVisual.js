//srcs/login.js
const Visual = require('../../../Schemas/user_visual');
const getPrivate = require('./DBquery/getPrivate');

async function insertVisual(name,account){
    const user = await new Visual({
        username:{data : name},
        account:{data: account}
    }).save();
    return user
}

module.exports = async function (req, res, next) {
    let session_account = req.session.loginAccount

    try{
        let obj = await Visual.findOne({"account.data":session_account})
        if(!obj){
            if(!session_account) return//for dev
            obj = await insertVisual(req.session.loginName,session_account)
        }
        const user = getPrivate(obj)
        return res.status(201).send({data:user})
    }catch(e){
        console.log(e)
        return res.status(500).send({description:"資料庫錯誤"})
    }
    // Visual.find({"account.data":session_account}, async function(err, obj){
    //     if (err) {
    //         console.log("Error:" + err);
    //         return res.status(500).send({description:"資料庫錯誤"}); 
    //     }
    //     else {
    //         let output=null;
    //         if(obj.length === 1){
    //             output = getPrivate(obj[0]);
    //             console.log('即將傳出使用者資料',output.account);
    //             res.status(201).send({data:output});
    //         }else if(obj.length === 0){//存在session但不在資料庫裡
    //             console.log("session:",session_account);
    //             if(req.session.loginName && session_account){
    //                 output = await insertVisual(req.session.loginName,session_account);
    //             }
    //             if(!output){
    //                 return res.status(500).send({description:"資料庫錯誤(資料插入錯誤)"}); 
    //             }else{
    //                 output.userimage = '';
    //                 return res.status(201).send({data:output}); 
    //             }
    //         }else{
    //             return res.status(404).send({description:"帳號重複"}); 
    //         }
    //     }
    // })
}