const mongoose=require("mongoose")

const UserLoginHistorySchema=new mongoose.Schema({
    
    token_user:{
        type:String,
        default:null
    },
    time_login:{
        type:Date,
        default:Date.now()
       
    },
    time_logout:{
        type:Date,
        default:Date.now()
    },
    status: {
        type: String,
        enum: ['active', 'offline'],
        default: "offline"
      }


},{timestamps:true})



module.exports=mongoose.model("UserLoginHistory",UserLoginHistorySchema)