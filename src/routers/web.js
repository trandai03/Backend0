const express = require('express');
const router = express.Router();
const { getHomepage, checkABC } = require('../controllers/homeController');

// router.Method('/route', handler)
router.get('/' , getHomepage);
router.get('/check' , checkABC);

router.get('/abc', (req, res) => {
    res.render('sample.ejs')
  })

module.exports = router //export default 