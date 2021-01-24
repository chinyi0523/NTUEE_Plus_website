const { dbCatch, ErrorHandler } = require('../../../../error');
const Column = require('../../../../Schemas/column_outline');

module.exports = async function (name){
	const objOutline = await Column.find({}).catch(dbCatch)
	if(!objOutline) throw new ErrorHandler(404,'圖片不存在')
    const objOutlineNew = objOutline.map(element => {
        return {
            imgSrc:element.imgSrc,
            filename:element.filename,
            anno:element.anno,
            title:element.title,
            exp:element.element,
            edu:element.edu,
            intro:element.intro,
            id:element.id
        } //{...element,columnImg:''}
    });
    return objOutlineNew
}