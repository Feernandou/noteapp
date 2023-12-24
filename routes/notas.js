const express = require("express")
const router = express.Router()
const Nota = require("../models/note")
function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/")
}

router.get("/",isAuthenticated,async(req,res)=>{
    
    try{
        const notas = await Nota.find({userID:req.user._id})
        res.render("notas",{user:req.user,notas:notas})
    }catch(err){
        console.log("Error al obtener las notas ->",err)
    }
})
module.exports = router