const express = require("express")
const router = express.Router()
const Nota = require("../models/note")

router.post("/eliminar",async (req,res)=>{
    try{
        const notaId = req.body.notaId
        await Nota.findByIdAndDelete(notaId)
        
        res.redirect("/notas")
    }catch(err){
        console.log("Error al eliminar la nota ->",err)
    }
})
module.exports = router