let fs = require("fs");
let path = require("path");
fs.unlink("txt/npmByCreateFile.txt", function (err) {
  if (err) console.log(err);;
  console.log("File deleted!");
});
