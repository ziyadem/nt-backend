//1
// function countArrElement(arr) {
//     let obj={}
//     for (let i = 0; i < arr.length; i++) {
//         let s=1;
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i]==arr[j]){
//                s+=1 
//                arr.splice(j,1)
//             }
//         } 
//         obj[arr[i]]=s
//     }
//     console.log(obj);
// }
// countArrElement(['A','B','C','B',true,true,false])

//2
// function firstLast6(arr) {
//     return (arr[arr.length - 1] == 6 || arr[0] == 6)
// }
// console.log(firstLast6([1, 2, 6]));
// console.log(firstLast6([6, 2, 7, 8]));
// console.log(firstLast6([1, 2]));

//3
// function someFirstLast(arr) {
//   return (arr[0]===1 && arr[arr.length-1]==1)
// }
// console.log(someFirstLast([1, 2, 3, 1]));
// console.log(someFirstLast([1, 2, 3]));

//4
// function commonEnd(arr) {
//   let s=0
//   arr.forEach(e => {
//     if(e[e.length-1]==3){s++}
//   });
//   return s==arr.length
// }
// console.log(commonEnd([[1, 2, 3], [1, 3,8], [4, 3], [3]]));

//5
// function rotateLeftThree(arr) {
//   let res=[]
//   for (let i = 1; i < arr.length; i++) {
//     res.push(arr[i])
//   }
//   res.push(arr[0])
//   console.log(res);
// }
// rotateLeftThree([1,2,3])

//6
// function oneCount(arr) {
//   let s=0
//   let res=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].forEach(e => {
//       if(e===1)s++
//     });
//   }
//   console.log(res[s]);
// }
// oneCount([[1,2,3],[3,1],[1,5],[1]])

//7
// function minThree(arr) {
//   let res = [
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
//   let arrRes=[]
//   let s = arr.length / 2
//   let k=Number(s.toFixed())
//   if(arr.length%2==1){
//     arrRes.push(res[arr[k-2]])
//     arrRes.push(res[arr[k-1]])
//     arrRes.push(res[arr[k]]);
//   }else{
//     arrRes.push(res[arr[k-1]]);
//     arrRes.push(res[arr[k]]);
//     arrRes.push(res[arr[k+1]]);
//   }
//   console.log(arrRes);
// }
// minThree([1,8,3,4,5,9])

//8
// function answerCell(arr) {
//   let s=0
//   arr.forEach(e => {
//     if(arr[0]===e) s++
//   });
//   return s==arr.length
// }
// console.log(answerCell([true, true, true, true]));
// console.log(answerCell([true, true, false, true]));
// console.log(answerCell([false,false,false]));

//9
// function blackjack(a,b) {
//   let max=0
//   if(a>b){max=a}else{max=b}
//   let c=max.toString()
//   let res1 = [
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
//   let res=[]
//   for (let i = 0; i < c.length; i++) {
//     res.push(Number(c[i]));
//     res.push(res1[Number(c[i])]);
//   }
//   let obj={
//     max_number:max,
//     arr:res,
//     arr_length:res.length,
//     type:(typeof c),
//   }
//   console.log(obj);
// }
// blackjack(12,4556)

//10
// function reverseWords(txt) {
//   let arr=txt.split(' ')
//   let res=''
//   for (let i = arr.length-1; i >=0; i--) {
//     res +=arr[i]+' '
//   }
//   console.log(res);
// }
// reverseWords('Iam junior frontend developer')

//destruction1
// let arr=[
//   'olma',15,[5,4,3]
// ]
// let [a,b,c]=arr
// console.log(a,b,c);

//destruction2
// let arr=[
//   'olma',15,[5,4,3],[{name:'a'}]
// ]
// let [a,b,c,[{name}]]=arr
// console.log(a,b,c,name);
