
    // let buf1 = Buffer.from('abc');
    // let buf2 = Buffer.from('abcd');
    // let x = Buffer.compare(buf1, buf2);
    // console.log(buf1) 



//  var buf1 = Buffer.from('aaaa');
// var buf2 = Buffer.from('bbbb');
// var buf3 = Buffer.from('cccc');
// var arr = [buf1, buf2, buf3];
// console.log(arr);
// //Join the array into one buffer object:
// var buf = Buffer.concat(arr);
// console.log(buf);


/*
var buf = Buffer.from('abc');

for (x of buf.entries()) {
  console.log(x);
}

*/



// var buf1 = Buffer.from('abc');
// var buf2 = Buffer.from('abcf');
// console.log(buf1.equals(buf2));



// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('HELLO');

//Copy buf2 into parts of buf1:
// buf1.copy(buf2);
// console.log(buf2.toString());
// console.log(buf2.toString());
// console.log(buf1.toString());



// var buf = Buffer.from('abc');

// console.log(buf);
// for (x of buf.entries()) {
// }

// var buffer = new Buffer("TutorialsPoint");
let buffer = Buffer.from("TutorialsPoint");

//length of the buffer
console.log("buffer length: " + buffer.length);
