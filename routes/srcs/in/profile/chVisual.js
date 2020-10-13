//srcs/chLogin.js
const Visual = require('../../../Schemas/user_visual');
const updatePro = require('./DBquery/update');
module.exports = async function (req, res, next) {
    const session_account = (req.session.loginAccount)

    try{
        const obj = await Visual.findOne({"account.data":session_account})
        if(!obj) return res.status(404).send({description:"帳號不存在"})
        const update = updatePro(req)
        await Visual.updateOne({"account.data":session_account},update)
        return res.status(204).end();
    }catch(e){
        console.log(e)
        return res.status(500).send({description:"資料庫錯誤"})
    }
    // Visual.find({"account.data":session_account}, function(err, obj){
    //     if (err) {
    //         console.log("Error:" + err);
    //         return res.status(500).send({status:'success',message:false, description:"資料庫錯誤"}); 
    //     }
    //     else {
    //         if(obj.length === 1){
    //             const update = updatePro(req);
    //             Visual.updateOne({"account.data":session_account},update,function(err,result){
    //                 // console.log("result=",result);
    //                 // Visual.updateOne({"account.data":session_account},
    //                 // {$pull:{"Occupation":null}},
    //                 // function(err2,result2){console.log('deleted array(may be undefined)=',result2)});
    //                 if (err) {
    //                     console.log(err);
    //                     return res.status(500).send({description:'資料庫錯誤'});
    //                 }
    //             });
    //             return res.status(204).end();
    //         }else{
    //             console.log("session:",session_account);
    //             return res.status(404).send({description:"帳號不存在或重複"}); 
    //         }
    //     }
    // })
}