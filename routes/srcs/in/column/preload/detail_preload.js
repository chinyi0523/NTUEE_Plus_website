// const imgPath = '../../../../../client/src/images'
// const fs =require('fs')
const Column_detail = require('../../../../Schemas/column_detail')
// const Column = require('../../../Schemas/column')
const toInsert = [
    require('./details/1601'),
    require('./details/1602')
]

// const path = require('path')

const main = async () => {
    toInsert.forEach(async (obj,index)=>{
        const column_detail = new Column_detail(obj)
        console.log(index)
        console.log(column_detail)
        column_detail.save()
    })
}
main()