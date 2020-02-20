var user_v_Schema = require('../../Schemas/user_visual');

column1 = [
	"account",
	"username",
	"nickname",
	"profile",
	"publicEmail",
	"office",
	"homephone",
	"cellphone",
	"CC",
	"web",
	"facebook",
	"Linkedin"
]
column2 = [
	["education","major"],
	["education","double_major"],
	["education","minor"],
	["education","master"],
	["education","doctor"]
]

module.exports = function (req, res, next) {
	var session_account = req.session.loginAccount
	if(!session_account){
		session_account = 'b07901028' //測試用
	}
	if(session_account){
		query={}
		column1.forEach(element=>{
			if(req.body[element]!==undefined){
				query[element+".data"] = req.body[element];
				query[element+".show"] = true;
			}
		})
		column2.forEach(element=>{
			if(req.body[element]!==undefined){
				query[element+".SD"] = req.body[element];
				query[element+".show"] = true;
			}
		})
		console.log('query=',query)
		user_v_Schema.find(query,{_id:0},function(err,obj){
			if (err) {
				console.log("Error:" + err);
				return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
			}
			else{
				var output = []
				obj.forEach(people=>{
					var output1 = {}
					column1.forEach(element=>{
						if(people[element]["show"]===true && people[element]["data"]!==(undefined||"")){//有空研究一下find的鍵指定，看output能不能只顯示true的
							output1[element]=people[element]["data"]
						}
					})
					column2.forEach(element=>{
						if(people[element[0]][element[1]]["show"]===true && people[element[0]][element[1]]["data"]!==(undefined||"")){//有空研究一下find的鍵指定，看output能不能只顯示true的
							output1[element]=people[element[0]][element[1]]["data"]
						}
					})
					if(people.userimage.show===true && people.userimage.data!==undefined){
						var prefix="data:"+people.userimage.contentType+";base64,"
						var img = new Buffer(people.userimage.data, 'binary').toString('base64');
						output1.userimage = prefix+img;
						console.log('img=',output1)
					}
					output1.Occupation = people.Occupation
					output.push(output1)
				})
				console.log('output=',output)
				return res.send({status:'success',message:true,data:output});
			}
		})
	}else{
		res.send({status:'success',message:false,description:"session不存在(已過期)"});
	}
}