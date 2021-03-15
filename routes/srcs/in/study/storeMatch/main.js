const asyncHandle = require('express-async-handler')
const parseExcel = require('./parseExcel')
const readXlsxFile = require('read-excel-file/node')
const store = require('./sendmails')

parseXls = async (filePath, keys)=>{
    const rows = await readXlsxFile(filePath)
    // const wb = xlsx.readFile(filePath)
    // const ws  = wb.Sheets[wb.SheetNames[0]]
    // console.log(ws)
    const indexs = keys.map(({chin,...props})=>{
        const index = rows[0].indexOf(chin)
        return {index,...props}
    })
    return rows.slice(1).map(data=>{
        output = {}
        indexs.forEach(({key,index,splitBy,first})=>{
            if(index == -1) return output[key] = null
            let value = data[index]
            if(splitBy!==undefined) value = value.split(splitBy).map(s=>s.trim())
            else if (first!==undefined) value = value.split(first)[0]
            output[key]=value
        })
        return output
    })
} 
const rKeys = [
    {key:'sname',chin:'學長姊姓名'},
    {key:'smail',chin:'學長姊信箱'},
    {key:'jname',chin:'學弟妹姓名'},
    {key:'account',chin:'學弟妹學號'},
    {key:'jmail',chin:'學弟妹信箱'}
]

/**
 * @api {post} /study_matching 配對
 * @apiName Study_matching
 * @apiGroup In/study
 * @apiDescription 給學長姊跟學弟妹留學配對的.xlsx檔，幫他們配對
 * 
 * @apiHeaderExample {json} config
                 { "content-type": "multipart/form-data" }
 * @apiParam {File} senior 學長姐的.xlsx
 * @apiParam {File} junior 學弟妹的.xlsx
 * 
 * @apiSuccess (200) {File} - output.xlsx
 */
const post = asyncHandle(async (req,res,next)=>{
    const result = req.file
    console.log(result)
    const resultData = await parseXls(result.path,rKeys)
    console.log(resultData)
    const finalData = []
    resultData.forEach(({sname,smail,...j})=>{
        const index = finalData.findIndex(({senior:{smail:sm}})=>{return smail===sm})
        console.log(index)
        if(index===-1) finalData.push({senior:{sname,smail},junior:[j]})
        else finalData[index].junior.push(j)
    })
    console.log(finalData)
    res.send(finalData)
})

module.exports = [parseExcel('result'),post]