const { dbCatch } = require('../../../error');
const Recruitment = require('../../../Schemas/recruitment');
const asyncHandler = require('express-async-handler')

async function deleteRecruitment (title) {
    
}

module.exports = asyncHandler(deleteRecruitment);