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
column22 = [
	["education",["major","double_major","minor","master","doctor"]]
]
column3 = [
	"Occupation"
]

module.exports.getOwnDB = function(obj1){
	console.log('obj=',obj1)
	output = {}
	column1.forEach(element=>{
		output[element]=obj1[element]
	})
	column22.forEach(element=>{
		output[element[0]] = obj1[element[0]]
	})
	column3.forEach(element=>{
		output[element]=obj1[element]
	})
	console.log('user0=',output)
	if(obj1.userimage.contentType){
		var prefix="data:"+obj1.userimage.contentType+";base64,"
		var img = new Buffer(obj1.userimage.data, 'binary').toString('base64');
		output.userimage = prefix+img;
	}
	return output
}

module.exports.getOtherDB = function(obj1){
	output = {}
	column1.forEach(element=>{
		if(obj1[element]["show"]===true && obj1[element]["data"]!==(undefined||'')){
			output[element]=obj1[element]["data"]
		}
	})
	column22.forEach(element=>{
		output[element[0]]={}
		element[1].forEach(ele1=>{
			if(obj1[element[0]][element[1]]["show"]===true
				&& (obj1[element[0]][element[1]]["SD"]!==(undefined||'')
				|| obj1[element[0]][element[1]]["Note"]!==(undefined||''))
			){
				output[element[0]][element[1]]={
					SD:obj1[element[0]][element[1]]["SD"],
					Note:obj1[element[0]][element[1]]["Note"]
				}
			}
		})
	})
	column3.forEach(element=>{
		output[element]=[]
		obj1[element].forEach(occupation=>{
			if(occupation.show===true){
				output[element].push({
					title:occupation.title,
					Company:occupation.Company
				})
			}
		})
	})
	if(obj1.userimage.contentType){
		var prefix="data:"+obj1.userimage.contentType+";base64,"
		var img = new Buffer(obj1.userimage.data, 'binary').toString('base64');
		output.userimage = prefix+img;
	}
	console.log('user1=',output.account)
	return output
}

module.exports.search = function(req){
	query={}
	column1.forEach(element=>{
		if(req.body[element]!==undefined){
			query[element+".data"] = req.body[element];
			query[element+".show"] = true;
		}
	})
	column22.forEach(element=>{
		element[1].forEach(ele1=>{
			if(req.body[element[0]]!==undefined&&req.body[element[0]][ele1]!==undefined){
				query[element[0]+'.'+ele1+".SD"] = req.body[element[0]][ele1];
				query[element[0]+'.'+ele1+".show"] = true;
			}else if(req.body[element[0]+'.'+ele1]!==undefined){
				query[element[0]+'.'+ele1+".SD"] = req.body[element[0]+'.'+ele1];//格式隨你高興la
				query[element[0]+'.'+ele1+".show"] = true;
			}
		})
	})
	console.log('query=',query)
	return query
}

module.exports.chDB = function(req){
	//update $set 的讀值規則(用xxx.xxx或xxx.$.xxx(用在array))
	//https://docs.mongodb.com/manual/reference/operator/update/set/
	output = {}
	unset = {}
	column1.forEach(element=>{
		if(element!='account'){
			if(req.body[element+'.data']!==undefined){
				(req.body[element+'.data']==='') ? (unset[element+'.data']="") : (output[element+'.data']=req.body[element+'.data'])
			}
			(req.body[element+'.show']!==undefined) && (output[element+'.show']=req.body[element+'.show'])
		}
	})
	column2.forEach(element=>{
		const ele = element[0]+'.'+element[1];
		(req.body[ele+'.show']!==undefined) && (output[ele+'.show']=req.body[ele+'.show'])
		if(req.body[ele+'.SD']!==undefined){
			(req.body[ele+'.SD']==='')? (unset[ele+'.SD']=""): (output[ele+'.SD']=req.body[ele+'.SD'])
		}
		if(req.body[ele+'.Note']!==undefined){
			(req.body[ele+'.Note']==='')? (unset[ele+'.Note']="") : (output[ele+'.Note']=req.body[ele+'.Note'])
		}
	})
	console.log('set=',output)
	console.log('unset=',unset)
	if(req.file){
		output["userimage.data"] = req.file.buffer
		output["userimage.contentType"] = req.file.mimetype
		console.log('get img',output["userimage.contentType"])
	}
	return {$set:output,$unset:unset}
}