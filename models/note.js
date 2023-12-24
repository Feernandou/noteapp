const {Schema,model} = require("mongoose")

const noteSchema = new Schema({
    contenido:{type:String,required:true},
    userID:{type:Schema.Types.ObjectId,ref:"User",required:true}
})
module.exports = model("Note",noteSchema)