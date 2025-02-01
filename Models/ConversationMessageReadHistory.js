const mongoose = require("mongoose");

const ConversationReadMessageSchema = new mongoose.Schema(
  {
    token_conversation_message: {
      type: String,
      default: null
    },

    token_user: {
      type: String,
      default: null
    },
 
    read_on: {
      type: String,
      enum: ["yes", "no"],
      default: null
    }
  },
  { timestamps: true }
);
UserSchema.pre("save", function (next) {
  if (!this.token_user) {
    this.token_user = crypto.randomBytes(6).toString("hex"); 
  }
  next();
});

module.exports = mongoose.model(
  "ConversationReadMessage",
  ConversationReadMessageSchema
);
