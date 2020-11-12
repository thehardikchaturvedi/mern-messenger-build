const Message = require('../models/message');
exports.getMessages = (req, res) => {
    Message.find().sort({'_id': -1}).exec((err, messages) => {
      if (err || !messages) {
        return res.json({ error: 'No Messages Found' });
      }
      return res.json(messages);
    });
  };

  exports.saveMessage=(req,res)=>{
    try {
      const message = new Message(req.body);
      message.save((err, message) => {
        if (err) {
          return res.status(400).json({ err: err });
        }
  
        return res.json(message);
      });
    } catch (error) {
      return res.status(500).json({ msg: 'Server error' });
    }
  }