// const fs=require("fs");

// fs.writeFile("message.txt","Hello from Adi",(err)=>{
//     if(err) throw err;
//     console.log("file saved!");
// })

// fs.readFile("message.txt",'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })


const fs = require("fs");

fs.writeFile("message.txt", "Hello from Adi", (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File saved!");
        
        // Read the file after it's been written
        fs.readFile("message.txt", "utf8", (readErr, data) => {
            if (readErr) {
                console.error("Error reading file:", readErr);
            } else {
                console.log(data);
            }
        });
    }
});
