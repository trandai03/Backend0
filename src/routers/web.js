const express = require('express');
const router = express.Router();
const { getHomepage, checkABC ,abc,postCreateUser,getCreatePage} = require('../controllers/homeController');

// router.Method('/route', handler)
router.get('/' , getHomepage);
router.get('/check' , checkABC);
router.get('/abc', abc)
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)
module.exports = router //export default 