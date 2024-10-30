const express=require("express");
const EventEmitter=require("events");
const app=express();
const event=new EventEmitter();

let count=0;
event.on("count_api",()=>{
    count++;
    console.log("count",count)
})
app.get("/" , (req,res)=>{
    res.send("api call");
    event.emit("count_api")
})
app.get("/search" , (req,res)=>{
    res.send(" search api call");
    event.emit("count_api")
})
app.get("/help" , (req,res)=>{
    res.send("help api call");
    event.emit("count_api")
})
app.listen(4000,'localhost');