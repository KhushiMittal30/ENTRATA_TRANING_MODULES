const fs = require('fs');

// fs.writeFile("message.txt","Hello from NODEJS",(err)=>{
//     if(err) throw err;
//     console.log("file has been saved");
// })
fs.readFile('message.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 