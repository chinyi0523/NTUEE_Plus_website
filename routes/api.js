//routes/api.js 控管後端所有頁面部屬
const express = require("express")
const router = express.Router()
const env = require('dotenv')
env.config()

if(process.env.NODE_ENV==='development'){
    //test
    console.log('running in dev mode')
    /**
     * @api {get} /testClient testClient
     * @apiName TestClient
     * @apiGroup Test
     * @apiDescription 前端的測試頁面，建議改用postman測試
     *
     * @apiSuccess {file} - 測試頁面
     */
    router.get("/testClient",function(req,res){
        const path = require('path');
        // console.log("use test");
        res.sendFile(path.join(__dirname+"/test/testClient.html"))
    })
    router.post("/testRoute",require("./test/testRoute"))
}

//out
//login, loginFB, register, registerFB
router.use(require("./srcs/out/account/main"))
//forget, activation
router.use(require("./srcs/out/forget/main"))

//in
//Auth
router.use(require("./srcs/in/isAuth"))
//showVisual, chVisual, searchVisual
router.use(require("./srcs/in/profile/main"))
//showPerson, chLogin, isLogin, logout
router.use(require("./srcs/in/account/main"))
//getImg, saveImg
router.use(require("./srcs/in/column/main"))
//searchJob, addJob, addRecruitment
router.use(require("./srcs/in/career/main"))
//study
router.use(require('./srcs/in/study/main'))

//error handling, every error thrown by previous router will be catch by me
router.use(require('./error').handleError)

module.exports = router;