const readXlsxFile = require('read-excel-file/node')
const xlsx = require('xlsx')
const munkres = require('munkres-js')

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

const sKeys = [
    {key:'name',chin:'姓名'},
    {key:'degree',chin:'學位',splitBy:' + '},
    {key:'major',chin:'領域',splitBy:', '},
    {key:'email',chin:'電子郵件地址'},
    {key:'number',chin:'數量'},
    {key:'gpa',chin:'成績'},
    {key:'school',chin:'最終決定去的學校',first:'/'},
]
const jKeys = [
    {key:'name',chin:'姓名'},
    {key:'degree',chin:'學位',splitBy:' + '},
    {key:'major',chin:'領域',splitBy:', '},
    {key:'email',chin:'您的Email (必填)'},
    {key:'gpa',chin:'成績'},
    {key:'account',chin:'學號'},
    {key:'school',chin:'1. 希望就讀學校之 夢幻學校',splitBy:'/'},
]

const cmp2arr = (a1,a2)=>a1.some(e=>a2.indexOf(e)>=0)
const print = (...s)=>console.log(...s)

const matching = async (senior,junior,oPath)=>{
    const seniorData = await parseXls(senior,sKeys)
    const juniorData = await parseXls(junior,jKeys)
    console.log(seniorData[0])
    console.log(juniorData[0])
    const score = seniorData.map(({degree:sd,major:sm,gpa:sg,school:ss})=>{
        return juniorData.map(({degree:jd,major:jm,gpa:jg,school:js})=>{
            let score = 0
            if( cmp2arr(sd,jd) ) score += 1.5
            if( cmp2arr(sm,jm) ) score += 2
            if( cmp2arr([ss],js) ) score +=2.5
            score += 1/(1+Math.abs(sg-jg))
            return -score //因為是找最小cost，所以負號
        })
    })
    const p1_back = [0]

    
    const tensor = seniorData.reduce((acc,{number},index)=>{
        p1_back.push(p1_back[p1_back.length-1]+number)
        for(let i=0;i<number;i++){
            acc.push(score[index])
        }
        return acc
    },[])
    print(p1_back)
    const reverse = (index)=>{
        for(let i=0;i<p1_back.length-1;i++){
            if(p1_back[i]<=index && p1_back[i+1]>index) return i
        }
        return -1
    }

    const result = munkres(tensor)
    const ws = xlsx.utils.aoa_to_sheet([['學長姊姓名', '學長姊信箱', '學弟妹姓名','學弟妹學號', '學弟妹信箱']])
    result.forEach(([i,j],ind)=>{
        const sRow = seniorData[reverse(i)]
        const jRow = juniorData[j]
        xlsx.utils.sheet_add_aoa(ws,[[sRow.name,sRow.email,jRow.name,jRow.account,jRow.email]] , {origin: -1})//,{origin:`A${ind+2}`})
    })
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'sheet1');
    xlsx.writeFile(wb,oPath)
}

// matching('senior.xlsx', 'junior.xlsx', 'output.xlsx')

exports.module = matching
