const multer = require( 'multer')
const {ErrorHandler} = require('../../../../error')

const __dirname = './'//path.resolve();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/api/excel/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploadExcel = multer({
    fileFilter:function(req,file,cb){
		if(!file.originalname.match(/\.(xlsx)$/)){
			req.fileValidationError = '請傳送.xlsx檔'
			return cb(new Error('請傳送.xlsx檔'),false)
		}
		cb(null,true)
    },
    storage:storage
}).fields([
    {name:'senior',maxCount:1},
    {name:'junior',maxCount:1}
])

exports.module = (req,res,next)=>{
    uploadExcel(req,res,(err)=>{
        if (req.fileValidationError) throw new ErrorHandler(400,req.fileValidationError)
        else if(err instanceof multer.MulterError) throw new ErrorHandler(400,err.message)
        else if(err) throw new ErrorHandler(400,err)
        next()
    })
}