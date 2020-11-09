const {JSDOM} = require('jsdom')
const jquery = require('jquery')
const path = require('path')
/**
 * generate email with beautiful button
 * @param  {String} href hyper link to the reset password page
 * @param  {String} href_br hyper link for user to copy (contain <wbr>)
 * @return  {String} html text
 */
module.exports = async (href,href_br) => {
    const DOM = await JSDOM.fromFile(
        path.join(__dirname, './resetPassword.html'),
        {contentType: 'text/html'})
    const {window} = DOM
    const $ = jquery(window)
    $('#reset_button').attr("href",href)
    $('#reset_blank').attr("href", href)
    $('#reset_blank').text(href_br)
    return window.document.documentElement.outerHTML
}