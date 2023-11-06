const express = require('express');
const router = express.Router();
const { getHomepage, checkABC ,abc} = require('../controllers/homeController');

// router.Method('/route', handler)
router.get('/' , getHomepage);
router.get('/check' , checkABC);

router.get('/abc', abc)

module.exports = router //export default 