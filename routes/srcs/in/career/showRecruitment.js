const { dbCatch } = require('../../../error')
const Recruitment = require('../../../Schemas/recruitment')
// const getPublic = require('./DBquery/getPublic')
module.exports = async (req,res,next)=>{
    const recs = await Recruitment.find().catch(dbCatch)
    const output = []
    recs.forEach(obj=>{
        output.push(obj.getPublic())
    })
    res.status(200).send(output)
}