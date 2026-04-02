import express from "express"
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("This is the root or the home page")
})
app.get("/about",(req,res)=>{
    res.send("This is the about page")
})
app.get("/",(req,res)=>{
    res.send("This is the root or the home page")
})

app.listen(port,()=>{
    console.log(`the sever is running on ${port}`)
})