
const { User, Profile } = require('../models')
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
        .then((User)=>{
            const userId = User.id
            res.redirect(`/registerProfile?id=${userId}`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static ProfilForm(req,res){
        const userId = req.query.id
        User.findByPk(userId)
        .then((user)=>{
            res.render("formProfile", {user})
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static postProfil(req,res){
        const { name, address, phone, gender, UserId } = req.body
        Profile.create({ name, address, phone, gender, UserId })
        .then(()=>{
            res.redirect('/login')
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static loginForm(req, res){
        const {error} = req.query
        res.render("formLogin", {error})
    }
    static postLogin(req, res){
        const {email, password} = req.body
        User.findOne({
            where : { email }
        })
        .then((user)=>{

            if (user) {
                const validatePassword = bcryptjs.compareSync(password, user.password)
                if (validatePassword) {
                    req.session.userId = user.id
                    req.session.role = user.role
                    return res.redirect('/')
                }
                else{
                    const error = "Invalid Email/Password"
                    return res.redirect(`/login?error=${error}`)
                }                
            }
            else {
                const error = "Invalid Email/Password"
                return res.redirect(`/login?error=${error}`)
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static homePage(req, res){
        res.render('home')
    }
    static getLogOut(req, res){
        req.session.destroy((err)=>{
            if (err) {
                res.send(err)
            }else{
                res.redirect('/login')
            }
        })
    }
}

module.exports = UserController;