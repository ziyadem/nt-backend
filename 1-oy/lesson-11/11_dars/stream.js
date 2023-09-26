let fs = require("fs");
var data = '';

/*
fs.readFile('./input.txt', (err, data)=>{
    console.log(data);
})
*/

//Create a readable stream  write stream
/*
     let readerStream = fs.createReadStream('./input.txt');
     var writerStream = fs.createWriteStream('output.txt');
     readerStream.setEncoding('UTF8');
     readerStream.on('data', function(chunk) {
     writerStream.write(chunk,'UTF8');
     writerStream.end();
     data += chunk;
     });
     readerStream.on('error', function(err) {
     console.log(err.stack);
     });
     readerStream.on('end',function() {
     console.log(data);
     });
 */







/* Create a readable stream  by pipe
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);
*/


/* Chaning holatini yasash 
var zlib = require('zlib');
     input.txt falini siqib zib formatini pipe orqali hosil qilish.
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));

*/
