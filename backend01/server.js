const express = require("express")

const app = express();

app.get("/",(req,res)=>{
res.send("Hello My First day in backend")
})

app.get("/about",(req,res)=>{
res.send("This is about page , message sent from backend")
})

app.listen(3000);