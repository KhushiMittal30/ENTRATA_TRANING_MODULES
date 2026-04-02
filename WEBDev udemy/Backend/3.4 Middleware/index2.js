// write logs to a file
// log file rotation
// Simple app that will log all requests in the Apache combined format to one log file per day in the log/ directory using the rotating-file-stream module.


import express from "express";
import morgan from "morgan";
import fs from "fs";
import path, { dirname } from 'path';
import {fileURLToPath} from 'url'

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

const fileaccessstream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})


app.use(morgan(('combined'),{stream:fileaccessstream}))

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
