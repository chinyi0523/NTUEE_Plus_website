const template2senior = require('./mail/senior')
const template2junior = require('./mail/junior')
const sendmail = require('../../../../middleware/mail/main')
const { forEach } = require('./main')

const resultData = [
    {
        senior: {
            sname: '鄭謹譯',
            //smail: 'jeff5120721@yahoo.com.tw'
            smail: 'b08901110@ntu.edu.tw'
        },
        junior: [
            {
                jname: '陳君輔',
                //jmail: 'b07901029@ntu.edu.tw'
                jmail: 'b08901110@ntu.edu.tw'
            }, {
                jname: '陳希格',
                //jmail: 'b07901029@ntu.edu.tw'
                jmail: 'b08901110@ntu.edu.tw'
            }
        ]
    }
]

const toSenior = async (data) => {
    const mail_to_senior = await template2senior(data)
    await sendmail(data.senior.smail, '留學配對結果', mail_to_senior)
}
const toJunior = async (data) => {
    const mail_to_junior = await template2junior(data)
    mail_to_junior.forEach(async (one_mail_to_junior, index) => await sendmail(data.junior[index].jmail, '留學配對結果', one_mail_to_junior))

}

const sendmails = async (resultData) => {  //Error Handling
    errors = []
    resultData.forEach(async data => {
        try {
            const mail_to_senior = await template2senior(data)
            await sendmail(data.senior.smail, '留學配對結果', mail_to_senior)
            throw new Error()

        } catch {
            errors.push(data.senior)

        }

        try {
            const mail_to_junior = await toJunior(data);
            throw new Error()
        } catch {
            errors.push(data.junior)
        }
    })
    console.log(errors)
    return errors
}

console.log('triger sendmails')
sendmails(resultData)


module.exports = sendmails

async function printFiles() {
    const files = await getFilePaths();

    const promises = files.map((file) => fs.readFile(file, 'utf8'))

    const contents = await Promise.all(promises)

    contents.forEach(console.log);
}