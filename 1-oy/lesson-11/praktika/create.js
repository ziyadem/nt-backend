const fs = require("fs")
const path = require("path");

// console.log(path);
// console.log(__dirname);
// // result = path.isAbsolute("/kjsdod.txt");
// // console.log(result);
// fs.appendFile('fresh.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');

// });
// File destination.txt will be created or overwritten by default.

// if(s===0){
//     fs.copyFile("fresh.txt", "destination.txt", (err) => {
//       if (err) console.log(err);;
//       console.log("source.txt was copied to destination.txt");
//       s++
//       console.log(s);
//     });
// }

fs.readdir(__dirname, (err, files) => {
  if (err) console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach((file) => {
      console.log(file);
    });
  }
});
