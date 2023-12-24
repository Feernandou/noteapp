

const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const User = require("../models/user")

passport.use(new LocalStrategy({usernameField:"correo",passwordField:"password"},
    async (correo,password,done)=>{
        try{
            const user = await User.findOne({correo})
            if(!user){
                return done(null,false,{message:"Usuario incorrecto"})
            }
            if(!await bcrypt.compare(password,user.password)){
                return done(null,false,{message:"Contraseña incorrecta"})
            }
            return done(null,user)
        }catch (error){
            return done(error)
        }
    }    
))
passport.serializeUser((user,done)=>{
    done(null,user._id)
})
passport.deserializeUser(async(id,done)=>{
    try{
        const user = await User.findOne({_id:id})
        done(null,user)
    }catch(error){
        done(error)
    }
})
module.exports = passport