const express=require("express");
const app=express();

const port=8080;

const path=require("path");
let methodOverride = require('method-override');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,"public")));


const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main().then((res)=>{
    console.log("Connected SuccessFully");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
}


// Index-Route
app.get("/chats",async(req,res)=>{
   let chat= await Chat.find();
    res.render("index.ejs",{chat});
})


// New-Route
 app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
 })

 // Create-Route
  app.post("/chats",(req,res)=>{
      let {sender,newmsg,receiver}=req.body;
      let newchat=new Chat({
        from:sender,
        to:receiver,
        msg:newmsg,
        created_at:new Date()
      });

      newchat.save().then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      });
      res.redirect("/chats");
  })

// Edit-Route
 app.get("/chats/:id/edit",async(req,res)=>{
      let {id}=req.params;
      let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
 })


 // Update-Route
 app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {editmsg}=req.body;

     let chat=await Chat.findByIdAndUpdate(id,
        { msg: editmsg },
    { runValidators: true , new:true }
    );
   res.redirect("/chats");
 })


 // Delete-Route
  app.delete("/chats/:id",async(req,res)=>{
    let { id } = req.params;
       await Chat.findByIdAndDelete(id);
      res.redirect("/chats");
  })

app.get("/",(req,res)=>{
    res.send("Working SuccessFully");
})

app.listen(port,(req,res)=>{
    console.log(`app listening port ${port}`);
})