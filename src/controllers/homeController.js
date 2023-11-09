const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDServices')


const getHomepage = async (req,res) => {
    let results = await getAllUsers();
    return res.render('home.ejs',{listUsers : results})
}

const getCreatePage = (req,res) => {
    return res.render('create.ejs')

}

const checkABC = (req,res) => {
    res.send('check abc')

}

const abc = (req,res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req,res) => {
    let {email,myName ,city} = req.body;

    let [result, fields] = await connection.query(
            `INSERT INTO  Users (email ,name , city) VALUES (? ,? ,?)`, [email, myName, city]);
    res.send('create user success')
}


module.exports = {
    getHomepage,checkABC,abc,postCreateUser,getCreatePage
}