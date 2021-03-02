const {JSDOM} = require('jsdom')
const jquery = require('jquery')
const path = require('path')
const fs = require('fs')
// const { ErrorHandler } = require('../../../../error')


data = {
    senior:{sname:'鄭謹譯'},
    junior:[
        {
            jname:'陳君輔',
            jmail:'b07901029@ntu.edu.tw'
        },{
            jname:'陳希格',
            jmail:'b07901014@ntu.edu.tw'  
        }
    ]
}
const template_junior = async ({jname}) => {
    const DOM = await JSDOM.fromFile(
        path.join(__dirname, './junior.html'),
        {contentType: 'text/html'}).catch(e=>{
            console.log(e.message)
            throw new Error(500,'信件範本讀取失敗')
        })
    const {window} = DOM
    const $ = jquery(window)
    $('#jname').text(jname)
    return window
}

const template_senior = async ({ sname, smail,school,area})=>{
    const DOM = await new JSDOM(
        `<p style="margin: 0;">
            姓名：<span id='name'>OOO</span> <br/>
            學校：<span id='school'>OOO</span> <br/>
            就讀領域：<span id='area'>OOO</span> <br/>
            聯絡方式：<span id='email'>OOO</span> <br/>
        </p>`)
    const {window} = DOM
    const $ = jquery(window)
    sname && $('#name').text(sname)
    smail && $('#email').text(smail)
    school && $('#school').text(school)
    area && $('#area').text(area)
    return `<tr>
        <td style="padding: 0px 24px 12px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">`
        +DOM.serialize()
        +`</td>
        </tr>`
}

const main = async ({senior,junior})=>{
    const blockText =  await template_senior(senior)
    return await Promise.all(
        junior.map(async (student)=>{
            const win1 = await template_junior(student)
            const $ = jquery(win1)
            $('#seniorBlock').append(blockText)
            return win1.document.documentElement.outerHTML
        })
    )
}

const test = async ()=>{
    const htmls = await main(data)
    htmls.forEach((html,index)=>{
        fs.writeFile(`jun${index}.html`, html, err => {
            console.log('done');
        });
    })
}
test()

module.exports = main