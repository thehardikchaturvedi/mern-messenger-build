const mongoose=require('mongoose')
const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp:String
},{timestamps: true});
module.exports= mongoose.model('Message', messageSchema);
