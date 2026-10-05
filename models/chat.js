
const  mongoose  = require("mongoose");
  
 // Schema Defined
 const chatSchema=new mongoose.Schema({
   from:{
    type:String,
    require:true
   },
   to:{
    type:String,
    require:true
   },
   msg:{
    type:String,
    maxLength:50
   },
   created_at: {
    type:Date,
    require:true
   }
 });


 // Model

 const Chat=mongoose.model("chat",chatSchema);

module.exports = Chat;

const chats = [
  {
    from: "Kirana",
    to: "Rahul",
    msg: "Hello, how are you?",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Kirana",
    msg: "I am fine. What about you?",
    created_at: new Date()
  },
  {
    from: "Kiran",
    to: "Rahul",
    msg: "Are you coming tomorrow?",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Kiran",
    msg: "Yes, I will come.",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Kirana",
    msg: "Did you finish the assignment?",
    created_at: new Date()
  }
];

// Chat.insertMany(chats)
//   .then((res) => {
//     console.log("Data inserted successfully");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });