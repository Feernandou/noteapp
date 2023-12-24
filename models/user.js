const bcrypt = require("bcrypt")
const {Schema,model} = require("mongoose")

const user = new Schema({
    
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    correo:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})
user.pre("save", async function (next) {
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password,salt)
        this.password = hashedPassword
        next()
    }catch(err){
        next(err)
    }
})

module.exports = model("User",user)