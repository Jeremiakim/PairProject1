const { User } = require('../models')
const bcryptjs = require('bcryptjs')


class UserController{
    static registerForm(req,res){
        res.render("formRegister")
    }
    static postRegister(req,res){
        const {email, password} = req.body
        User.create({
            email,
            password
        })
        .then((_)=>{
            res.redirect('/login')
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static loginForm(req, res){
        res.render("formLogin")
    }
    static postLogin(req, res){
        const {email, password} = req.body
        User.findOne({
            where : { email }
        })
        .then((user)=>{
            const validatePassword = bcryptjs.compareSync(password, user.password)
            if (validatePassword) {
                return res.redirect('/')
            }
            else{
                return
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static homePage(req, res){
        res.render('home')
    }
}

module.exports = UserController;