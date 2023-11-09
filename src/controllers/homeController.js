const connection = require('../config/database')
const { getAllUsers,getUserById,updateUserById } = require('../services/CRUDServices')


const getHomepage = async (req,res) => {
    let results = await getAllUsers();
    return res.render('home.ejs',{listUsers : results})
}

const getCreatePage = (req,res) => {
    return res.render('create.ejs')
}

const getUpdatePage = async (req,res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    return res.render('update.ejs',{userEdit:user})
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

const postUpdateUser = async (req,res) => {
    let userId = req.body.id;
    let {email,myName ,city} = req.body;
    await updateUserById(userId,email,myName,city)
    // res.send('update user success')
    res.redirect('/')

}
module.exports = {
    getHomepage,checkABC,abc,postCreateUser,getCreatePage,getUpdatePage,postUpdateUser
}