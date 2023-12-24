const express = require("express")
const router = express.Router()
const noteSchema = require("../models/note")

router.post("/crear",async (req,res)=>{
    const {contenido} = req.body
    async function crear(){
        const nota = new noteSchema({
            contenido:contenido,
            userID:req.user._id
        })
        await nota.save()
        console.log("Nota subida")
        res.redirect("/notas")
        
    }
    crear()
})
module.exports = router