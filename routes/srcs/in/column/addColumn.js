const { dbCatch } = require('../../../error');
const Column_detail = require('../../../Schemas/column_detail');
const Column_outline = require('../../../Schemas/column_outline');
const asyncHandler = require('express-async-handler')

/*新增一筆資料*/
async function insert_detail(title,hashtags,bigtitle,smalltitle,section,annotation,id){
    const column_detail =  await new Column_detail({
        title: title,
        hashtags: hashtags,
        sections:{
            bigtitle: bigtitle,
            sections:{
                title: smalltitle,
                section: section,
            },
        },
        annotation: annotation,
        id: id
    }).save().catch(dbCatch)
    console.log(column_detail.title)
    return column_detail.title
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
  
async function insert_outline(filename,anno,title,exp,edu,intro,id){
    const column_outline =  await new Column_outline({
        filename: filename,
        anno: anno,
        title: title,
        exp: exp,
        edu: edu,
        intro: intro,
        id: id,
        
    }).save().catch(dbCatch)
    console.log(column_outline.filename)
    return column_outline.filename
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
  
  /**
   * @api {post} /addRecruitment 新增職缺
   * @apiName AddRecruitment
   * @apiGroup In/career
   * 
   * @apiparam {String} title 職缺標題
   * @apiparam {String} company_name 公司名稱
   * @apiparam {String} work_type 職位(ex.前端工程師)
   * @apiparam {String} salary 薪資
   * @apiparam {String} experience 經驗要求
   * @apiparam {String} diploma 學系要求
   * @apiparam {String} requirement 技能要求
   * @apiparam {String} description 其他描述
   * 
   * @apiSuccess (201) data 職缺標題
   * 
   * @apiError (500) {String} description 資料庫錯誤
   */
module.exports = asyncHandler(async (req, res)=>{
    const columnTitle = req.body.title;
    const columnDetailId = req.body.detail_id;
    const columnDetailHashtags = req.body.hashtags;
    const columnDetailBigtitle = req.body.bigtitle;
    const columnDetailSection = req.body.section;
    const columnDetailSmallTitle = req.body.smalltitle;
    const columnDetailAnnotation = req.body.annotation;
    const columnOutlineFilename = req.body.filename;
    const columnOutlineAnno = req.body.anno;
    const columnOutlineExp = req.body.exp;
    const columnOutlineEdu = req.body.edu;
    const columnOutlineIntro = req.body.intro;
    const columnOutlineId = req.body.outline_id;
  
    //var query = {ID: ID};
    console.log("新增column_detail")
    await insert_detail(columnTitle,columnDetailHashtags,columnDetailBigtitle,columnDetailSmallTitle,columnDetailSection,columnDetailAnnotation,columnDetailId)
    console.log("新增column_outline")
    await insert_outline(columnOutlineFilename,columnOutlineAnno,columnTitle,columnOutlineExp,columnOutlineEdu,columnOutlineIntro,columnOutlineId)
    res.status(201).send({data_detail: columnTitle, data_outline: columnOutlineFilename})
})

/*
module.exports = asyncHandler(async (req, res)=>{
    const columnOutlineFilename = req.body.filename;
    const columnOutlineAnno = req.body.anno;
    const columnOutlineTitle = req.body.title;
    const columnOutlineExp = req.body.exp;
    const columnOutlineEdu = req.body.edu;
    const columnOutlineIntro = req.body.intro;
    const columnOutlineId = req.body.id;
  
    //var query = {ID: ID};
    console.log("新增column_outline")
    console.log(req.body.filename)
    await insert_outline(columnOutlineFilename,columnOutlineAnno,columnOutlineTitle,columnOutlineExp,columnOutlineEdu,columnOutlineIntro,columnOutlineId)
    res.status(201).send({data: columnOutlineFilename})
})*/