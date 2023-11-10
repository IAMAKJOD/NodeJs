import inquirer from "inquirer";  //cli interface
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([{ message: "Type in your url: ", name: "url" }])
  .then((answers) => {
    console.log(answers);
    const url=answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err;
        console.log("url saved into file");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      //Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
