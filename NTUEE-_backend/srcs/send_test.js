var send = require('./mail_test');




module.exports = function (myfriend, hr){
		// 创建一个邮件对象
	var mail = {
		// 发件人
		from: 'jeff5120721@gmail.com',
		// 主题
		subject: '激活碼(一小時後到期)',
		// 收件人
		to: myfriend,
		// 邮件内容，HTML格式
		//text:一些內容
		html: hr //接收激活请求的链接
	};
	send(mail);
};