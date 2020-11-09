const {JSDOM} = require('jsdom')
const jquery = require('jquery')

const template = async (href,href_br) => {
    const DOM = await JSDOM.fromFile('./routes/srcs/out/forget/mail/template.html',{contentType: 'text/html'})
    // console.log(DOM.window)
    // DOM.window.getElementByID
    const {window} = DOM
    const $ = jquery(window)
    // global.document = DOM.document
    $('#reset_button').attr("href",href)
    $('#reset_blank').attr("href", href)
    $('#reset_blank').text(href_br)
    return window.document.documentElement.outerHTML
}
// template('#','#')
module.exports = template