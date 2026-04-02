import express from "express";
import bodyParser from "body-parser";
import path,{dirname} from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,'/public/index.html'));
})

app.post("/submit",(req,res)=>{
console.log(req.body);
res.send(`<h1>Your Band name is : </h1><br/><h1>${req.body.street} ${req.body.pet}</h1>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
