const mongoose=require("mongoose")

const UserCredentialSchema=new mongoose.Schema({

    token_user:{
        type:String,
        default:null
    },
    password:{
        type:String,
        default:null
    }
},{timestamps:true})

module.exports=mongoose.model("UserCredential",UserCredentialSchema)