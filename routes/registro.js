const express = require("express")
const router = express.Router()
const userSchema = require("../models/user")

require("./db")

router.post("/registrarse",(req,res)=>{
    const {nombre,apellido,correo,password} = req.body  
    async function saveUser(){
        const user = new userSchema({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            password: password
        })
        await user.save()
        console.log("Usuario registrado exitosamente")
        
    }
    saveUser()

    res.redirect("/")
    
})
module.exports = router