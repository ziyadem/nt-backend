//1
// function removeDups(arr) {
//     let res=[]
//     arr.forEach(e => {
//         if(!res.includes(e)){
//             res.push(e)
//         }
//     });
//     console.log(res);
// }
// removeDups(['as',2,'as',8])

//2
// Array.prototype.MyToString=function () {
//     let res=''
//     this.forEach(e => {
//         res +=e+' '
//     });
//     console.log(res);
//     return res
// }
// let arr=[1,2]
// arr.MyToString();

// Number.prototype.myToString=function(){
//     let res=this + ''
//     console.log(res);
//     return res
// }
// let k=13
// k.myToString()

//3
// function missingNum(arr) {
//    let max=arr[0]
//    for (let i = 1; i < arr.length; i++) {
//        if(max<=arr[i]){max=arr[i]}
//    } 
//    for (let i = 1; i < max+1; i++) {
//     if(!arr.includes(i)) console.log(i);
//    }
// }
// missingNum([1,2,3,4,6,7,8,9,15])

//4
// function fizzBuzz(a) {
//     let res=[]
//     if(a%2==0){
//     for (let i = 1; i < a+1; i+=2) {
//         res.push(i);
//         res.push('fizz')
//       }
//     }else{
//     for (let i = 2; i < a+1; i+=2) {
//         res.push('buzz')
//         res.push(i);
//       }
//     }
//     console.log(res);
// }
// fizzBuzz(6);
// fizzBuzz(7);

//5
// function findLettertoASCIICOde(arr) {
//     let obj={}
//     arr.forEach(e=> {
//         obj[String.fromCodePoint(e)]=e;
//     });
//     console.log(obj);
// }
// findLettertoASCIICOde([97,98,99,100])

//6
// function mummbling(txt) {
//     let res=''
//     for (let i = 0; i < txt.length; i++) {
//         for (let j = 0; j < i+1; j++) {
//             res+=txt[i]
//         }
//         res+='-'
//     }
//     console.log(res);
// }
// mummbling('ziyoda')

//7
// function mTAFFA(a,b) {
//     let res=[]
//     for (let i = 0; i < a.length; i++) {
//         let k=[]
//         for (let j = 0; j < a[i].length; j++) {
//             k.push(a[i][j]-b[i][j])
//         }
//         res.push(k)
//     }
//     console.log(res);
// }
// mTAFFA([
//     [10,20,30],
//     [1,2,3],
//     [1,2,3]
// ],[
//     [9,19,29],
//     [1,2,3],
//     [1,2,3]

// ])

//8
// function getSum(arr) {
//   let res =0;
//       for (let i = 0; i < arr.length; i++) {
//           for (let j = 0; j < arr[i].length; j++) {
//              res+=arr[i][j]
//           }
//       }
//       let res1 = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//     "ten",
//   ];
//    if(res>10){
//     console.log({sum:res});
//    }else{
//     console.log({sum:res1[res]});
//    }
// }
// getSum([
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 0, 0],
// ]);

//9
// function duplicateCount(txt) {
//     let k=0
//     for (let i = 0; i < txt.length; i++) {
//         let s=0
//         for (let j = i+1; j < txt.length; j++) {
//             if(txt[i]==txt[j]){
//                  s++
//             }
//         }
//         if(s!==0){k++}
//     }
//     console.log(k);
// }
// duplicateCount('ziyodazi')

