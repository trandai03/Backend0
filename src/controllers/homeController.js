const getHomepage = (req,res) => {
    res.send('Hello World! Tran Dai')

}

const checkABC = (req,res) => {
    res.send('check abc')

}

const abc = (req,res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,checkABC,abc
}