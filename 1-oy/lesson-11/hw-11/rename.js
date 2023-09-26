let fs = require("fs");
let path = require("path");

fs.rename("txt/npmByCreateFile.txt",'txt/abs.txt', (err)=>{
    if(err) console.log(err);
    console.log('rename');
});