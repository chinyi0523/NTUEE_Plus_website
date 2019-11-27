// 引入 nodemailer
var nodemailer = require('nodemailer');
var credentials = require('./credentials')

// 创建一个SMTP客户端配置
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: credentials.gmail.user,
    pass: credentials.gmail.password
  }
});

// 发送邮件
module.exports = function (mail){
    transporter.sendMail(mail, function(error, info){
        if(error) {
            return console.log(error);
        }
        console.log('mail sent:', info.response);
    });
};