const validList = require('./validation')
const check = require('./controller')

module.exports =  (url)=>{
    return [validList(url),check]
}