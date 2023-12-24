require('dotenv').config()
const mongoose = require("mongoose")
const uri = process.env.MONGO_URI
const db = mongoose.connection
mongoose.connect(uri)

db.once("open", ()=>{
    console.log("Conectado a la base de datos exitosamente")
})
db.on("error",(err)=>{
    console.log("Error ->",err)
})