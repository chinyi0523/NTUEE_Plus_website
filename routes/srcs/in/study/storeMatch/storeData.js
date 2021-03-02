const readXlsxFile = require('read-excel-file/node')
const template2senior = require('./mail/senior')
const template2junior = require('./mail/junior')
const sendmail = require('../../../../middleware/mail/main')
parseXls = async (filePath, keys)=>{
    const rows = await readXlsxFile(filePath)
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

keys = {
    key:'sname',chin:'學長姊姓名',
    key:'smail',chin:'學長姊信箱',
    key:'jname',chin:'學弟妹姓名',
    key:'jacc',chin:'學弟妹學號',
    key:'jmail',chin:'學弟妹信箱',
}

const store = async (fPath)=>{
    // const resultData = await parseXls(fPath,keys)
    // console.log(resultData)
    resultData = [
        {
            senior:{
                sname:'鄭謹譯',
                smail:'jeff5120721@yahoo.com.tw'
            },
            junior:[
                {
                    jname:'陳君輔',
                    jmail:'b07901029@ntu.edu.tw'
                },{
                    jname:'陳希格',
                    jmail:'b07901029@ntu.edu.tw'  
                }
            ]
        }
    ]
    errors = []
    resultData.forEach(data=>{
        try{
            const mail_to_senior = await template2senior(data)
            await sendmail(data.senior.smail,'留學配對結果',mail_to_senior)
        }catch{
            errors.push(data.senior)
        }
    })
}