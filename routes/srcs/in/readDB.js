const column1 = [
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
const column2 = [
	["education","major"],
	["education","double_major"],
	["education","minor"],
	["education","master"],
	["education","doctor"]
]
const column22 = [
	["education",["major","double_major","minor","master","doctor"]]
]
const column3 = [
	"Occupation"
]
const column33 = ["O","P","C"]

module.exports.getOwnDB = function(obj1){
	//console.log('obj=',obj1)
	const output = {}
	column1.forEach(element=>{
		output[element]=obj1[element]
	})
	column22.forEach(element=>{
		output[element[0]] = obj1[element[0]]
	})
	column3.forEach(element=>{
		output[element]=obj1[element]
	})
	//console.log('user0=',output)
	if(obj1.userimage.contentType){
		const prefix="data:"+obj1.userimage.contentType+";base64,"
		const img = new Buffer(obj1.userimage.data, 'binary').toString('base64');
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
			if(obj1[element[0]][ele1]["show"]===true
				&& (obj1[element[0]][ele1]["SD"]!==(undefined||'')
				|| obj1[element[0]][ele1]["Note"]!==(undefined||''))
			){
				output[element[0]][ele1]={
					SD:obj1[element[0]][ele1]["SD"],
					Note:obj1[element[0]][ele1]["Note"]
				}
			}
		})
	})
	column3.forEach(element=>{
		output[element]=[]
		obj1[element].forEach(occupation=>{
			if(occupation!==null){
			console.log(occupation)
			if(occupation.show===true){
				output[element].push({
					Company:occupation.C,
					Position:occupation.P,
					Occupation:occupation.O
				})
			}}
		})
	
	})
	//console.log(output["Occupation"])
	if(obj1.userimage.contentType){
		const prefix="data:"+obj1.userimage.contentType+";base64,"
		const img = new Buffer(obj1.userimage.data, 'binary').toString('base64');
		output.userimage = prefix+img;
	}
	//console.log('user1=',output.account)
	return output
}

module.exports.search = function(req){
	const query={}
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
	let JobQ = false;
	const JobMatch = {};
	column33.forEach(ele2=>{
		if(req.body["Occupation."+ele2]!==undefined){
			JobQ = true;
			JobMatch[ele2] = req.body["Occupation."+ele2];
		}
	})
	if(JobQ){
		JobMatch["show"] = true;
		query["Occupation"] = {$elemMatch:JobMatch};
	}
	console.log('query=',query)
	return query
}

module.exports.searchOr = function(req){
	let query=[]
	column1.forEach(element=>{
		if(req.body[element]!==undefined){
			const Q1 = {};
			Q1[element+".data"] = req.body[element];
			Q1[element+".show"] = true;
			query.push(Q1);
		}
	})
	column22.forEach(element=>{
		element[1].forEach(ele1=>{
			const Q2 = {};
			if(req.body[element[0]]!==undefined&&req.body[element[0]][ele1]!==undefined){
				Q2[element[0]+'.'+ele1+".SD"] = req.body[element[0]][ele1];
				Q2[element[0]+'.'+ele1+".show"] = true;
				query.push(Q2);
			}else if(req.body[element[0]+'.'+ele1]!==undefined){
				Q2[element[0]+'.'+ele1+".SD"] = req.body[element[0]+'.'+ele1];//格式隨你高興la
				Q2[element[0]+'.'+ele1+".show"] = true;
				query.push(Q2);
			}
		})
	})
	let JobQ = false
	const JobMatch = {}
	column33.forEach(ele2=>{
		if(req.body["Occupation."+ele2]!==undefined){
			JobQ = true;
			JobMatch[ele2] = req.body["Occupation."+ele2];
		}
	})
	if(JobQ){
		const Q3={}
		JobMatch["show"] = true;
		Q3["Occupation"] = {$elemMatch:JobMatch};
		query.push(Q3)
	}
	if(query.length === 0){
		return {}
	}
	else{
		return {$or:query}
	}
}

module.exports.chDB = function(req){
	//update $set 的讀值規則(用xxx.xxx或xxx.$.xxx(用在array))
	//https://docs.mongodb.com/manual/reference/operator/update/set/
	const output = {}
	const unset = {}
	const re={}
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
	
	// if(Object.prototype.hasOwnProperty.call(req.body, 'Occupation')){
	// 	output["Occupation"] = req.body.Occupation
	// }
	if(Object.prototype.hasOwnProperty.call(req.body, 'Occupation.Remove')){
		for(let [key,val] of Object.entries(JSON.parse(req.body['Occupation.Remove']))){
			//key = work_O、P、C_{index}
			const arr = key.split('_')
			unset[column3+'.'+(arr[1]-1)] = 1//mongo 目前沒有辦法簡單地remove array's element，只能靠unset + pull null
		}
	}
	if(Object.prototype.hasOwnProperty.call(req.body, 'Occupation.Insert')){
		const item = {}
		for(let [key,val] of Object.entries(JSON.parse(req.body['Occupation.Insert']))){
			console.log('insert',key,val);
			var arr = key.split('_');
			if(!item.hasOwnProperty(arr[2])) item[arr[2]] = {};
			item[arr[2]][arr[1]] = val;
		}
		console.log('insert item',item)
		const pushArr = []
		Object.keys(item).sort().forEach(key=>{
			pushArr.push(item[key])
			console.log('push item',item[key])
		})
		re.$push = {'Occupation':{$each:pushArr}}
	}
	
	console.log('set=',output)
	console.log('unset=',unset)
	if(req.file){
		output["userimage.data"] = req.file.buffer
		output["userimage.contentType"] = req.file.mimetype
		console.log('get img',output["userimage.contentType"])
	}

	const unsetEmpty = (Object.entries(unset).length === 0 && unset.constructor === Object)
	const setEmpty = (Object.entries(output).length === 0 && output.constructor === Object)
	//var re = (!setEmpty)?((!unsetEmpty)?({$set:output,$unset:unset}):({$set:output})):((!unsetEmpty)?({$unset:unset}):({}))
	if(!unsetEmpty)(re.$unset=unset)
	if(!setEmpty)(re.$set = output)
	console.log('re',re)
	return re;
}

module.exports.searchJob = function(req){ //searchJob
	const output = {
		title:req.body.title,
		subtitle:req.body.subtitle||"",
		description: req.body.description
	}
	return output
}

const column_job = [
	"title",
	"subtitle",
	"description"
]

module.exports.getOtherDB_job = function(obj){
	const output = {}
	column_job.forEach(element=>{
		if(obj[element] !== (undefined || '')){
			output[element] = obj[element]
		}
	})
	console.log('job=',output.title)
	return output
}

module.exports.search_job = function(req){
	const query = {}
	column_job.forEach(element => {
		if(req.body[element] !== undefined){
			query[element] = req.body[element];
		}
	})
	console.log('query=', query)
	return query
}
