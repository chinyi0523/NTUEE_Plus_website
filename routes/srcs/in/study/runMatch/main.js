const asyncHandle = require('express-async-handler')
const parseExcel = require('./parseExcel')
const matching = require('./matching')

const post = asyncHandle(async (req,res,next)=>{
    const senior = req.files['senior'][0]
    const junior = req.files['junior'][0]
    console.log(senior)
    console.log(junior)
    
    // const childPython = spawn('python', ['./api/excel/matching.py',senior.path,junior.path,'./api/excel/uploads/output.csv'])
    await matching('/uploads/senior.xlsx','/uploads/junior.xlsx','/uploads/output.xlsx')
    res.download('api/excel/uploads/output.csv')
})

exports.module = [parseExcel,post]