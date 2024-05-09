const express= require("express");
const app= express()
const mongoose=require("mongoose");
const path= require("path");
let port=1000;

app.set("views engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("hii shruti");
})
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})

app.get("/about",(req,res)=>{
    res.render("about.ejs");
})

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})


app.listen(port,()=>{
    console.log("working")
})
