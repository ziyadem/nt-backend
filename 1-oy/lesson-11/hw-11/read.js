let fs = require("fs");
let path = require("path");
// fs.readFile(path.join(__dirname+'txt/npmByCreateFile.txt'),'read.json',(err)=>{
//     if(err) console.log(err);
//     console.log('read');
// })

fs.readFile(path.join("txt/npmByCreateFile.txt"), (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
var readerStream = fs.createReadStream("txt/npmByCreateFile.txt");
var writerStream = fs.createWriteStream('output.json');
readerStream.pipe(writerStream);