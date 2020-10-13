// 引入 nodemailer和寄件人資料(之後credential要改成EE+專用帳號)
const nodemailer = require('nodemailer');
const credentials = require('./credential')

// 創建SMTP客戶端配置
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: credentials.gmail.user,
        pass: credentials.gmail.password
    }
});

// 發送信件
module.exports = async function (mail){
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mail, function(error, info){
            if(error) {
                reject(error)
            }
            console.log('mail sent:', info.response);
            resolve(true)
        });
    })
}