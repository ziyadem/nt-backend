let fs=require('fs')
let path=require('path')
fs.mkdir(path.join(__dirname,'txt'),(err)=>{
   if(err) console.log(err);
   console.log('create');
})
fs.writeFile(path.join(__dirname,'txt/npmByCreateFile.txt'),'birnimalarrr.......',(err)=>{
    if(err) return console.log(err);
    console.log('create');
})

