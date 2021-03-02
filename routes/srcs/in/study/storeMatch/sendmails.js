const template2senior = require('./mail/senior')
const template2junior = require('./mail/junior')
const sendmail = require('../../../../middleware/mail/main')

const resultData = [
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

const toSenior = async (data)=>{
    const mail_to_senior = await template2senior(data)
    await sendmail(data.senior.smail,'留學配對結果',mail_to_senior)
}
const toJunior = async (data)=>{
    const mail_to_junior = await template2junior(data)
    await sendmail(data.senior.smail,'留學配對結果',mail_to_junior)
}

const sendmails = async (resultData)=>{
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

sendmails(resultData)

module.exports = sendmails