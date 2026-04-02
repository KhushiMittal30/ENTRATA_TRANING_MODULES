//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//mistakes : (req,res) order is important in functions 


import express from "express";
import bodyParser from "body-parser";
import path,{dirname} from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000 ;
const __dirname = dirname(fileURLToPath(import.meta.url));

var userAuthorized = false;

app.use(bodyParser.urlencoded({extended:true}));

function checkpass(req,res,next){
  if(req.body.password==='ILoveProgramming')  //password as per name attribute in the input tag
    // userAuthorized = true ;
    res.sendFile(path.join(__dirname,'/public/secret.html'));

else
  res.sendFile(path.join(__dirname,'/public/index.html'));
// userAuthorized = false;
next();

}

app.use(checkpass);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.post("/check",(req,res)=>{
   console.log(req.body);
//    if(userAuthorized===true)
//   res.sendFile(path.join(__dirname,'/public/secret.html'));
//     else
//     res.redirect("/");
});



app.listen(3000,()=>{
    console.log(`The server is listening to all the request on port ${port}`);
})