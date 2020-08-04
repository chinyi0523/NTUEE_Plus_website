module.exports = function (req, res, next)
{
    console.log("test Route recieve",req.body);
    return res.send(req.body);
}