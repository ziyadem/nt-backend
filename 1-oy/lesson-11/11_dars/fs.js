const fs = require('fs');
 const path = require('path');

//create file
// fs.appendFile('test.txt', 'testddddd', (err)=>{
//     if(err) throw err;
//     console.log('File created!');
// })

//fs.appendFileSync('test.txt', 'text.....')


// fs.open('open.txt', 'w', (err, file)=>{
//     if(err) throw err;
//     console.log('Created!!!', file);
// })


 //fs.openSync('opensync.txt', 'w')

// // fs.writeFile('test.txt', 'We is learning nodejs fs module', function (err) {
// //     if (err) throw err;
// //     console.log('Saved!');
// //   });

// //   fs.appendFile('test.txt', 'append file', (err)=>{
// //     if(err) throw err;
// //     console.log('File created!');
// // })


// fs.rename('test.txt', 'new_test.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });


//  fs.renameSync('new_test.txt', 'test.txt');


// fs.unlink('test.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

// fs.open('test2.txt', 'r', function (err, file, data) {
//     if (err) throw err;
//     console.log('Saved!', file, data);
//   });


console.log(path.join(__dirname, '..', 'folder', 'test.txt'));


// fs.appendFile('../folder/append/test/1.txt', 'path orqali file yaratdik....', (err)=>{
//     if(err) throw err;
//     console.log('File created!');
// })

fs.mkdir(path.join(__dirname, './folder/append/'),{ recursive: true }, (err)=>{
    console.log(err);
})

// //console.log(path.join(__dirname, '..', 'folder'));


// let datas = null;
// // let data = JSON.parse(fs.readFile('../folder/append/test/1.txt', 'utf8', (err, data)=>{
// //     return data
// // }))



// // function read(fileName){
// //   return JSON.stringify()
// // }
// // let data = fs.readFileSync('../folder/append/test/1.txt', 'utf8');

// //  async function test(){
// //     let data = await read('1.txt')
// //     console.log(data);
// // }

// // test();

// // let data = fs.readFile(`../folder/append/test/1.txt`, 'utf8', (err, data)=>{
    
// //     return data
// // });

// // async function test(){
// //      console.log(
// //         await data
// //      );
// // }

// // test();

// async function example() {
//     try {
//       const data = await fs.readFile('../folder/append/test/1.txt', 'utf8', (err, data)=>{
//         if(err) throw err;
//         console.log('olindi...', data);
//       });
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   example();

