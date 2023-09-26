//1
// function concat(a) {
//     let arr=[]
//     for (const i of a) {
//         for (const j of i) {
//             arr.push(j)
//         }
//     }
//     return arr
// }
// console.log(concat([
//   [1,2],
//   [3,4,5],
//   [6,7]
// ]));

//2
// function secondLargest(num) {
//     num.sort(function (a, b) {
//       if (a > b) return 1;
//       if (a < b) return -1;
//       return 0;
//     });
//     return num[num.length-2]
// }
// console.log(secondLargest([30, 40, 50, 3, 56, 3]));

//3
// function sevenBoom(a) {
//     for (let i = 0; i < a.length; i++) {
//         let k=a[i].toString()
//         for (let j = 0; j < k.length; j++) {
//             if(k[j]==7){
//                 return 'boom'
//             }
//         }
//     }
//     return 'seven is not defined'
// }
// console.log(sevenBoom([1,2,67,3,4,5,6,23,56,6]));

//4
// function toDoArray(a) {
//     let arr=[]
//     for (let i = 1; i <= a; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(toDoArray(10));

//5
// function getLength(arr) {
    // let s=0
    // let n = 0;
    // while (n < arr.length) {
    //     for (const i of arr) {
    //         if(i.length){
    //             console.log('dk',i);
    //         }else{
    //           s++
    //         }            
    //     }
    //     n++      
    // }

    // return s
//     console.log(arr);
//     getLength([1,[3,[8,9]]])
// }
// console.log(getLength([1,2,[3,[4,[5,6]]]]));

//6
// function numInStr(arr) {
//     let res=[]
//     for (const i of arr) {
//         let s=0
//         for (const j of i) {
//             if(Number(j)){
//                s+=1
//             }
//         }
//         if(s!=0){
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(numInStr(['21','daa','dsk23nk3','kvnks','lsd1','sj1','s']));
