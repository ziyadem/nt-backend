let fs=require('fs')
let path=require('path')
//1

// fs.mkdir(path.join(__dirname,'folder/css'),(err)=>{
//   if(err) return console.log(err);
//   console.log('saved');
// })
// fs.mkdir(path.join(__dirname,'folder/html'),(err)=>{
//   if(err) return console.log(err);
//   console.log('saved');
// })
// fs.mkdir(path.join(__dirname,'folder/react/libs'),(err)=>{
//   if(err) return console.log(err);
//   console.log('saved');
// })
// fs.mkdir(path.join(__dirname,'folder/js'),(err)=>{
//   if(err) return console.log(err);
//   console.log('saved');
// })
//  fs.writeFile(path.join(__dirname, 'folder/css/style.css'), 'js...', (err) => {
//     if(err) return console.log(err);
//     console.log('Created!!');
//  })

//  fs.writeFile(path.join(__dirname, 'folder/html/index.html'), 'html...', (err) => {
//     if(err) console.log(err);
//     console.log('Created!!');
//  })

//  fs.writeFile(path.join(__dirname, 'folder/react/react.js'), 'react.js>>>', (err) => {
//     if(err) console.log(err);
//     console.log('Created!!');
//  })
//  fs.writeFile(path.join(__dirname, 'folder/js/app.js'), 'app.js>>>', (err) => {
//     if(err) console.log(err);
//     console.log('Created!!');
//  })
//  fs.writeFile(path.join(__dirname, 'folder/react/libs/nodemon.js'), 'nodemon.js>>>', (err) => {
//     if(err) console.log(err);
//     console.log('Created!!');
//  })

//2

//  fs.unlink(path.join(__dirname, 'folders/react/libs/text.txt'), (err) => {
//     if(err) console.log(err);
//     console.log('remove');
//  })
//  fs.unlink(path.join(__dirname, 'folders/js/main.css'), (err) => {
//     if(err) console.log(err);
//     console.log('remove');
//  })
//  fs.unlink(path.join(__dirname, 'folders/html/main.css'), (err) => {
//     if(err) console.log(err);
//     console.log('remove');
//  })
//  fs.unlink(path.join(__dirname, 'folders/html/app.jsx'), (err) => {
//     if(err) console.log(err);
//     console.log('remove');
//  })
//  fs.unlink(path.join(__dirname, 'folders/css/index.html'), (err) => {
//     if(err) console.log(err);
//     console.log('remove');
//  })
//  fs.unlink(path.join(__dirname, 'folders/css/main.ts'), (err) => {
//     if(err) console.log(err);
//     console.log('remove');
//  })

//4
const {EventEmitter}=require('events');
class MyEmitter extends EventEmitter{
    constructor(){
        super()
    }
}
let emitter=new MyEmitter()
emitter.on('create_file',()=>{
    console.log(123);
    fs.mkdir(path.join(__dirname,'fs'),(err)=>{
        if(err) console.log(err);
        console.log('create');
    })
    fs.mkdir(path.join(__dirname,'fs/events'),(err)=>{
        if(err) console.log(err);
        console.log('create');
    })
    fs.appendFile(path.join(__dirname,'fs/events/events.html'),'nmalardirrr',(err)=>{
        if(err) console.log(err);
        console.log('create');
    })

})

emitter.on('read_file',()=>{

    fs.readFile(path.join('fs/events/events.html'),(err,data)=>{
        if(err) console.log(err);
        console.log('read');
        console.log(data);
    })
    let readerStream = fs.createReadStream("fs/events/events.html");
    let writerStream = fs.createWriteStream("fs/read.json");
    readerStream.pipe(writerStream)
    
    
})
emitter.on('write_file',()=>{

    fs.writeFile(path.join('fs/events/events.html'),'qanday gozal bu olam..',(err)=>{
        if(err) console.log(err);
        console.log('write');
    })
    
})
emitter.on('rename_file',()=>{

    fs.rename("fs/events/events.html", "fs/events/khv.html",(err)=>{
        if(err) console.log(err);
        console.log(err);
    });
    
})
emitter.on('delete_file',()=>{

    fs.unlink(path.join('fs/events/events.html'),(err)=>{
        if(err) console.log(err);
        console.log('delete');
    })
    
})

// emitter.emit('create_file')
// emitter.emit('read_file')
// emitter.emit("write_file");
// emitter.emit("delete_file");
// emitter.emit("rename_file");

//5
// fs.mkdir('taskFive',(err)=>{
//     if(err) console.log(err);
//     console.log('create');
// })
// function createFileIntoFolder(a,b) {
//     fs.mkdir(`taskFive/${a}`,(err)=>{
//        if(err) console.log(err);
//        console.log('creaate');
//     })
//     fs.appendFile(`taskFive/${a}/${b}`,'blabla',(err)=>{
//        if(err) console.log(err);
//        console.log('creaate');
//     })

// }
// createFileIntoFolder("js", "js.js");
// createFileIntoFolder("react", "react.jsx");

//6
// function deleteFileIntoFolder(a,b) {
//     fs.unlink(`folder/${a}/${b}`,(err)=>{
//         if(err) console.log(err);
//         console.log('delete');
//     })
// }
// function renameFileIntoFolder(a,b) {
//     let c=''
//     fs.readdir(__dirname + `/folder/${a}`, (err, files) => {
//       if (err) console.log(err);
//       else {
//         files.forEach((file) => {
//             for (let i = 0; i < file.length; i++) {
//                 if(file[i]=='.'){c+=file}
//             }
//         });
//     }
// });
// setTimeout(() => {
//     fs.renameSync(`folder/${a}/${c}`, `folder/${a}/${b}`, (err) => {
//         if (err) console.log(err);
//         console.log("rename");
//     });    
    
// }, 5000);
// }
// deleteFileIntoFolder('js','app.js')
// renameFileIntoFolder("react", "nmadir.jsx");

//7
// fs.unlink('task7/backend/style.css',(err)=>{
//     if(err) console.log(err);
//     console.log('delete');
// })
// fs.rename("task7/frontend/node.js", "task7/frontend/gulp.js",(err)=>{
//     if(err) console.log(err);
//     console.log('rename');
// });

//8
// function createFileByUrl(url) {   
//     let a=path.extname(url)
//     let b=''
//     for (let i = 1; i < a.length; i++) {
//         b+=a[i]
//     }
//     fs.mkdir(`${b}`,(err)=>{
//         if(err) console.log(err);
//         console.log('mkdir');
//     })
    
// }
// createFileByUrl('https://nodejs.org/api/fs.html')

//9
// let { EventEmitter } = require("events");
// class MyEmitter extends EventEmitter {
//   constructor() {
//     super();
//   }
// }
// let EventsEmiter=new MyEmitter()
//     EventsEmiter.on('write_os',()=>{
//         fs.mkdir(path.join('task10'),(err)=>{
//             if(err) console.log(err);
//             console.log('mkdirr');
//         })
//         fs.mkdir(path.join('task10/os'),(err)=>{
//             if(err) console.log(err);
//             console.log('mkdirr');
//         }) 
//         setTimeout(() => {
//             fs.appendFile("task10/os/os.html", "nmalardir", (err) => {
//               if (err) console.log(err);
//               console.log("create");
//             });
//         }, 5000);
   
// })
// EventsEmiter.emit('write_os')

// let  writeURL='https://asaxiy.uz/product/key=telefon&size=24'
// let url=require('url')
// let q=url.parse(writeURL,true)
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// console.log(q.query);






