//1
// let buf1 = Buffer.from("I am learning JavasCript");
// let buf2 = Buffer.from("we learni TypeCript");
// let arr=[buf1,buf2]
// let buf=Buffer.concat(arr)
// console.log(buf,buf1.length,buf2.length);

//2
// let buf1 = Buffer.from("I am learning JavasCript ");
// let buf2 = Buffer.from("we learni TypeCript ");
// let buf3 = Buffer.from("About buffer ");
// let arr=[buf1,buf2,buf3]
// let buf=Buffer.concat(arr)
// let a = buf.toString().split(" ");
// console.log(a.indexOf('JavasCript'));

//3
// let buf1 = Buffer.from("I am learning JavasCript");
// let buf2 = Buffer.from("we learni TypeCript");
// a=buf1.length;
// b= buf2.length;
// if(a>b){
//   buf1.copy(buf2,0)
//   console.log(buf2.toString());
//   for (const x of buf2.entries()) {
//     console.log(x);
//   }
//   console.log(buf2.length);
// }else if(a<b){
//     buf2.copy(buf1, 0);
//     console.log(buf1.toString());
//     for (const x of buf1.entries()) {
//       console.log(x);
//     }
//     console.log(buf1.length);

// }else{
//    console.log(true);
// }


//path exam
// const path=require('path')
// console.log(path.join(__dirname, "task/css/style.css"));
// console.log(path.join(__dirname,'html','index.html'));
// console.log(path.join(__dirname, "js", "libs", "nodemon.js"));
// console.log(path.join(__dirname, "react",'react.js'));

