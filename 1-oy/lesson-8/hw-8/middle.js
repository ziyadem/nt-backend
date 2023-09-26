//2
// function pairs(arr) {
//     for (let i = 0; i < arr.length/2; i++) {
//         console.log([arr[i], arr[arr.length-1-i]]);
//     }
// }
// pairs([1,2,3,5,8,12])

//3
// function findCurrent(txt,a) {
//     let b=txt.split(' ')
//     let obj={}
//     for (let i = 0; i < b.length; i++) {
//         let s=0
//         for (let j = 0; j < b[i].length; j++) {
//             if(b[i][j]==a){
//                  s++
//             }
//         }
//         obj[b[i]]=s
//     }
//     console.log(obj);
// }
// findCurrent('dskssj dkjne efi' ,'s')

//5
// function reverseBinaryInteger(a) {
//   let b = a.toString(2);
//   let c=''
//   for (let i = b.length-1; i >=0 ; i--) {
//     c+=b[i]
//   }
//   console.log(c.toString(10));
// }
// reverseBinaryInteger(10)
