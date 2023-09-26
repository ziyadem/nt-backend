/*
const url = require("url")


let result = url.parse('https://nodejs.org/en/')

console.log(result);
*/


/*
const { EventEmitter } = require("events")


class MyEmitter extends EventEmitter{
    constructor(){
        super()
    }



}

let calculator = new MyEmitter()

calculator.on('add', (a, b) => {
    console.log(`add: `, a + b);
    return
})

calculator.on('minus', (a, b) => {
    console.log(`result: `, a - b);
    return
})

calculator.on('divide', (a, b) => {
    console.log(`result: `, a / b);
    return
})

calculator.on('multiply', (a, b) => {
    console.log(`result: `, a * b);
    return
})


calculator.once("add", () => {
    console.log('once...');
})

// calculator.once("submit", () => {
//     console.log('once...');
// })



// calculator.emit("add", 2, 5)
// calculator.emit("add", 6, 4)
// calculator.emit("two")
// calculator.emit("two")


// calculator.emit("once")
// calculator.emit("once")
// calculator.emit("once")
// calculator.emit('add', 3, 4)
// calculator.emit('add', 3, 4)
// calculator.emit('add', 3, 4)
// calculator.emit('add', 3, 4)
// calculator.emit('multiply', 3, 4)


// console.log(
// calculator.addListener == calculator.on

// );

*/



// const fs = require("fs")
// const path = require("path")


// fs.appendFile('test.html', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });



// fs.mkdir('test/OK/yana_ok/test.html', (err) => {
//     if(err) console.log(err);

//     console.log('OK');

// })


// fs.open('open.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// fs.writeFile('open.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });



//update file


// fs.appendFile('open.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });

//   fs.writeFile('open.txt', 'Hello world', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });





/*rename file

fs.rename('open.txt', 'test.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });

*/




//  fs.mkdir('folders/js', (err) => {
//     if(err) console.log(err);
//     console.log('OK');
//  })

//   fs.mkdir('folders/html', (err) => {
//     if(err) console.log(err);
//     console.log('OK');
//  })


//   fs.mkdir('folders/react', (err) => {
//     if(err) console.log(err);
//     console.log('OK');
//  })
//  fs.writeFile(path.join(__dirname, 'folders/js/app.js'), 'js...', (err) => {
//     if(err) console.log(err);
//     console.log('Created!!');
//  })

//  fs.writeFile(path.join(__dirname, 'folders/html/index.html'), 'html...', (err) => {
//     if(err) console.log(err);
//     console.log('Created!!');
//  })

// let text = 'Javascript frameworsdfvdfdfdfdfdgfdk'

//  fs.writeFile(path.join(__dirname, 'folders/react/app.jsx'), text, (err) => {
//     if(err) console.log(err);
//     console.log('Created!!');
//  })


//stream

const fs = require("fs")
const path = require("path")

// fs.readFile(path.join("files/1.mp4"), (err, data) => {
//     if(err){
//         console.log(err);
//         return
//     }

//     console.log(data);
// })



// let data = ""

// let readerStream = fs.createReadStream('./folders/js/app.json');
//      var writerStream = fs.createWriteStream('output.json');
//      readerStream.setEncoding('UTF8');
//      readerStream.on('data', function(chunk) {
//      writerStream.write(chunk,'UTF8');
//      writerStream.end();
//     });
//      readerStream.on('error', function(err) {
//      console.log(err.stack);
//      });
//      readerStream.on('end',function() {
//      console.log(data);
//      });


// var readerStream = fs.createReadStream('./folders/js/app.json');

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.json');

// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);




console.log(__dirname);


