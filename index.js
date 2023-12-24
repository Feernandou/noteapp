const express = require("express")
const session = require("express-session")
const app = express()
const passport = require("./routes/passport")


//variables de rutas
const registro = require("./routes/registro")
const notas = require("./routes/notas")
const crear = require("./routes/crear")
const actualizar = require("./routes/actualizar")
const eliminar = require("./routes/eliminar")
//configuraciones
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(express.json())
app.use(session({secret:"abba2202.",saveUninitialized:false,resave:false}))
app.use(passport.initialize());
app.use(passport.session());


//rutas
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/registrarse",registro)
app.post("/iniciar-sesion",
    passport.authenticate("local",{
    successRedirect:"/notas",
    failureRedirect:"/"
}))
app.use("/notas",notas)
app.post("/crear",crear)
app.post("/actualizar",actualizar)
app.post("/eliminar",eliminar)
app.get("/cerrar-sesion",(req,res)=>{
    req.session.destroy(err => {
        if (err) {
            console.error("Error al cerrar la sesión:", err);
            return res.status(500).send("Error interno del servidor");
        }

        
        res.redirect("/");
    });
})
app.listen(3000,()=>{
    console.log("Server en linea en el puerto 3000")
})