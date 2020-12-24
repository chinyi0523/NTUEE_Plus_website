const {body} = require('express-validator');

module.exports=body('Email')
            .optional({nullable: true, checkFalsy: true})
            .normalizeEmail().withMessage('郵件格式錯誤')
            .isEmail().withMessage('郵件格式錯誤')