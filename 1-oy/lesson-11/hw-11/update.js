
let fs=require('fs');
let path=require('path');
fs.appendFile("txt/npmByCreateFile.txt",'slk kd viepqe',(err)=>{
    if(err) console.log(err);
    console.log('update');
});