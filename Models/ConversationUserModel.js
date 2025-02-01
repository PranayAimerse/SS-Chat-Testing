const mongoose=require("mongoose")

const ConversationUserSchema=new mongoose.Schema({
    
    token_conversation:{
        type:String,
        default:null
    },
   token_user:{
    type:String,
    default:null
   }


},{timestamps:true})
UserSchema.pre("save", function (next) {
    if (!this.token_user) {
      this.token_user = crypto.randomBytes(6).toString("hex"); 
    }
    next();
  });
  UserSchema.pre("save", function (next) {
    if (!this.token_user) {
      this.token_user = crypto.randomBytes(6).toString("hex"); 
    }
    next();
  });


module.exports=mongoose.model("ConversationUser",ConversationUserSchema)