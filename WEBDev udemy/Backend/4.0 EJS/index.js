import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;



const dayType = ["weekend","weekday","weekday","weekday","weekday","weekday","weekend"];
var msgg ="";
var day;

function msg(res,req,next){
    const d = new Date();
     day = d.getDay();
    if(dayType[day]=="weekend"){
         msgg = "you should have fun today.";
    }
    else{
         msgg = "you should work hard";
    }

next();

}

app.use(msg);

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        day : dayType[day],
        text: msgg,
    })
})

app.listen(port , ()=>{
console.log(`server is listening on port ${port}`);
});