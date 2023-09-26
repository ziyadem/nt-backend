/*
    let buf1 = Buffer.from('abc');
    let buf2 = Buffer.from('abc');
    let x = Buffer.compare(buf1, buf2);
    console.log(x) 
*/

/*
 var buf1 = Buffer.from('aaaa');
var buf2 = Buffer.from('bbbb');
var buf3 = Buffer.from('cccc');
var arr = [buf1, buf2, buf3];

//Join the array into one buffer object:
var buf = Buffer.concat(arr);
console.log(buf);
*/

/*
var buf = Buffer.from('abc');

for (x of buf.entries()) {
  console.log(x);
}

*/


/*
var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');
console.log(buf1.equals(buf2));
*/

/*
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('HELLO');

//Copy buf2 into parts of buf1:
buf2.copy(buf1, 10);
console.log(buf1.toString());
*/


var buf = Buffer.from('abc');

for (x of buf.entries()) {
  console.log(x);
}
