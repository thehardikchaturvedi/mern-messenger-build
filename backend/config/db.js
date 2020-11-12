const mongoose=require('mongoose');
const config=require('config');
const db = config.get('mongoUri');
const Pusher =require('pusher')
const pusher = new Pusher({
  appId: "1100514",
  key: "4f377bd0f9de6f120b1c",
  secret: "bef7bf4cc2be27801e01",
  cluster: "ap2",
  useTLS: true
});
//DB Connection
const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('Congratulations! MongoDB is Connected');
        const changeStream=mongoose.connection.collection('messages').watch();
        changeStream.on('change',(change)=>{
          pusher.trigger("messages", "newMessage", {
            'change': change
          });
        })
      });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports= connectDB;
