// const { add, minus, divide, multiply  } = require("./math")
//import {add, minus, divide, multiply} from './math.js'
/*
// let res = add(4, 5)

// console.log(res);

let buf1 = Buffer.from('Nodejs');
    let buf2 = Buffer.from('Nodejs');
    let x = Buffer.compare(buf1, buf2);
    console.log(buf1) 
    console.log(buf2) 
    console.log(x) 

    console.log(buf1.toString());
    // console.log(JSON.parse(buf1));

    console.log(buf1.equals(buf2));

    */


/* os module

import os from 'os'

// console.log(os.platform())
// console.log(os.arch())

// console.log(os.cpus())
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.homedir())
console.log(os.uptime())
console.log(os.userInfo())
console.log(os.type())

console.log(os.networkInterfaces())

*/


// path
const path  = require("path")
// console.log(__filename)
// console.log(__dirname)
console.log(123);
console.log(path.basename('C:\Windows\System32\cmd.exe'))

console.log(path.dirname('https://www.npmjs.com/package/pnpm'))

console.log(path.extname('http://127.0.0.1:5500/index.html'))

console.log(path.parse('http://127.0.0.1:5500/index.html').name)

// console.log(path.join(__dirname, '../test/second.html'))

// console.log(path.resolve(__dirname, './test', '/second.html'))