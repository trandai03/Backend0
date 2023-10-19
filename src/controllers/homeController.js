const getHomepage = (res,req) => {
    res.send('Hello World! Tran Dai')

}

const checkABC = (res,req) => {
    res.send('check abc')

}


module.exports = {
    getHomepage,checkABC
}