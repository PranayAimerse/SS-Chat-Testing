const mongoose=require("mongoose")

const ConversationSchema=new mongoose.Schema({
    token_conversation:{
        type:String,
        default:null
    },
    date_start:{
        type:String,
        default:null
    },
   
    count_user:{
        type:Date,
        default:Date.now()
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: "null"
      }


},{timestamps:true})

ConversationSchema.pre("save", function (next) {
    if (!this.token_conversation) {
      this.token_conversation = crypto.randomBytes(6).toString("hex"); 
    }
    next();
  });

module.exports=mongoose.model("Conversation",ConversationSchema)