const express = require("express")
const router = express.Router()
const Note = require("../models/note")

router.post("/actualizar", async (req,res)=>{
    const nuevoContenido = req.body.contenido
    try{
        const notaId = req.body.notaId
        const notaActualizada = await Note.findByIdAndUpdate(notaId,
            {contenido: nuevoContenido},
            {new:true})
            console.log("Contenido actualizado")
            if (!notaActualizada) {
                return res.status(404).json({ mensaje: 'Nota no encontrada' });
            }
            res.redirect("/notas")
     }catch(err){
        console.log("Error del tipo ->",err)
     }
    
    
})
module.exports = router