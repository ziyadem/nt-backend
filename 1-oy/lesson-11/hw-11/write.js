

let fs = require("fs");
let path = require("path");
fs.writeFile("txt/npmByCreateFile.txt",'lorem ipsum nmalardir',(err)=>{
    if(err) console.log(err);
    console.log('replace');
});
