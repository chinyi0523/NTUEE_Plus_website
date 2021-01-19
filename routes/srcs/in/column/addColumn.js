const { dbCatch } = require('../../../error');
const Column_detail = require('../../../Schemas/column_detail');
const Column_outline = require('../../../Schemas/column_outline');
const asyncHandler = require('express-async-handler')

/*新增一筆資料*/
async function insert_detail(title,hashtags,sections,annotation,id){
    const column_detail =  await new Column_detail({
        title: title,
        hashtags: hashtags,
        sections: sections,
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
   * @api {post} /addColumn 管理員新增文章
   * @apiName addColumn
   * @apiGroup In/column
   * 
   * @apiparam {String[]} title 文章標題
   *    (xxxx 級 xxx (公司名稱與職位))
   * @apiparam {String} detail_id 文章在column_details的編號
   *    (column_yymm) 
   * @apiparam {String[]} hashtags 文章的hashtag
   *    (文章類別，訪問者姓名、級別、工作、相關組織與企業) 
   * @apiparam {Object[]} sections 
   * @apiparam {String} sections.bigtitle (一、標題，二、求學階段...)
   * @apiparam {Object[]} sections.sections
   * @apiparam {String} sections.sections.title (各bigtitle的小主題)
   * @apiparam {String} sections.sections.section (文章內容)
   * @apiparam {String[]} annotation 參與人員
   *    (工作:人員)
   * @apiparam {String} filename (yymm)
   * @apiparam {String[2]} anno 
   *    ([所有採訪人員姓名,| yyyy/mm/dd 星期x])
   * @apiparam {String[]} exp 採訪者的姓名與現任職位
   * @apiparam {String[]} edu 採訪者的學歷
   *    (學士:校系(畢業年分) 碩士:校系(畢業年分) 博士:校系(畢業年分))
   * @apiparam {String[]} intro 簡介
   *    (1個element是一段)
   * @apiparam {String} outline_id 文章在column_outlines的id
   *    (Column_Block_yymm)
   * 
   * @apiSuccess (201) {String} title post的title
   * @apiSuccess (201) {String} filename post的filename
   * 
   * @apiError (500) {String} description 資料庫錯誤
   */
module.exports = asyncHandler(async (req, res)=>{
    const columnTitle = req.body.title;
    const columnDetailId = req.body.detail_id;
    const columnDetailHashtags = req.body.hashtags;
    const columnDetailSections = req.body.sections;
    const columnDetailAnnotation = req.body.annotation;
    const columnOutlineFilename = req.body.filename;
    const columnOutlineAnno = req.body.anno;
    const columnOutlineExp = req.body.exp;
    const columnOutlineEdu = req.body.edu;
    const columnOutlineIntro = req.body.intro;
    const columnOutlineId = req.body.outline_id;
  
    //var query = {ID: ID};
    console.log("新增column_detail")
    await insert_detail(columnTitle,columnDetailHashtags,columnDetailSections,columnDetailAnnotation,columnDetailId).catch(dbCatch)
    console.log("新增column_outline")
    await insert_outline(columnOutlineFilename,columnOutlineAnno,columnTitle,columnOutlineExp,columnOutlineEdu,columnOutlineIntro,columnOutlineId).catch(dbCatch)
    res.status(201).send({title: columnTitle, filename: columnOutlineFilename})
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