/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer"
import qr from 'qr-image';
import fs from "fs";

inquirer
.prompt([
    {   message:"type the url ",
        name:"URL"
    }
])
.then((answers)=>{
    const url = answers.URL;
    console.log(answers);
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('my_qr.png'));
    var svg_string = qr.imageSync(url,{type:"svg"})  //returns a svg string formed from the url
    console.log(svg_string)
    fs.writeFile("URL.txt",url,(err)=>{
        if (err) throw err
        console.log("file saved");
    })
})

.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  





// var svg_string = qr.imageSync('I love QR!', { type: 'png' });