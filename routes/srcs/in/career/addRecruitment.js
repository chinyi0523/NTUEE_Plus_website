const Recruitment = require('../../../Schemas/recruitment');

/*新增一筆資料*/
async function insert(title,company_name,work_type,salary,experience,diploma,requirement,description){
    //格式
  const recruitment =  await new Recruitment({
    title:{
      title: title,
		  company_name: company_name,
		  work_type: work_type
	  },
	  info:{
		  salary: salary,
		  experience: experience,
		  diploma: diploma
	  },
	  spec:{
		  requirement: requirement,
		  description: description
    }
  }).save()
  console.log(recruitment.title.title)
  return recruitment.title.title
  // recruitment.save(function(err,res){ //save to db
  //     if(err){
  //         console.log(err);
  //     }
  //     else{
  //     console.log('成功儲存：',recruitment);
  //     console.log(res);
  //     }
  // })
}

module.exports = async function (req, res) {
  const recruitmentTitle = req.body.title;
  const recruitmentCompany_name = req.body.company_name;
  const recruitmentWork_type = req.body.work_type;
  const recruitmentSalary = req.body.salary;
  const recruitmentExperience = req.body.experience;
  const recruitmentDiploma = req.body.diploma;
  const recruitmentRequirement = req.body.requirement;
  const recruitmentDescription = req.body.description;

  //var query = {ID: ID};
  console.log("新增recruitment")
  try{
    await insert(recruitmentTitle,recruitmentCompany_name,recruitmentWork_type,recruitmentSalary,recruitmentExperience,recruitmentDiploma,recruitmentRequirement,recruitmentDescription)
    res.status(201).send({data: recruitmentTitle})
  }catch(e){
    console.log(e)
    res.status(500).send({description:'資料庫錯誤'})
  }
}
