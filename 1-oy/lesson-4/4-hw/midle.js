//1
// function countTrue(arr) {
//     let res=[]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===true){
//            res.push(i)
//         }
//     }
//     return [res,res.length]
// }
// console.log(countTrue([true,true,false,true]));

//2
// function toArray(obj) {
//     let arr=[]
//     for (const key in obj) {
//         arr.push([key,obj[key]])
//     }
//     return arr
// }
// console.log(toArray({a:1,b:2,c:3}));

//3
// function arrayOfMultiples(a,b) {
//     let arr=[]
//     for (let i = 0; i < b; i++) {
//         arr.push(a)
//         a+=a
//     }
//     return arr
// }
// console.log(arrayOfMultiples(7,3));

//4
// function objectToArray(obj) {
//     let arr=[]
//     for (const key in obj) {
//         arr.push([key,obj[key]])  
//         }
//     return arr
// }
// function arrayToObj(arr) {
//     let obj={}
//     for (const i of arr) {
//         let k = i[0];
//         let j = i[1];
//        obj[k]=j
//     }
//     return obj
// }
// console.log(objectToArray({
//     a:1,b:2,c:3
// }));
// console.log(
//   arrayToObj([
//     ["a", 1],
//     ["b", 2],
//   ])
// );

//5
// function sortIt(num) {
//     num.sort(function (a, b) {
//       if (a > b) return 1;
//       if (a < b) return -1;
//       return 0;
//     });
//     return num
// }
// console.log(sortIt([3,7,1,9]));

//6
// function compact(arr) {
//     let res=[]
//     for (const i of arr) {
//         if(i){res.push(i)}
//     }
//     return res
// }
// console.log(compact([0,1,false,true,4,'']));

//7
// function clone(a) {
//     let res=[]
//     for (const i of a) {
//         res.push(a)
//     }
//     return res
// }
// console.log(clone([1,2,3]));

//8
// function testJuckpot(arr) {
//     let a=arr[0]
//     let s=0
//     for (const i of arr) {
//         if(a===i){s+=1}
//     }
//      return s == arr.length;
// }
// console.log(testJuckpot(['a','a','a','a','d']));

//9
// function strToArray(a) {
//     let b=true
//     if(a.length){
//         b=true
//     }else{
//         b=false
//     }
//     return [{text:a,word_length:a.length},b]
// }
// console.log(strToArray("hello my name is ..."));

//10
// let arr=[[['I am'],8],3,4,5,[2,[3,['Nodejs'],3,4,[1,'text',3,['developer']]]]]

// let res=arr[0][0][0]+' '+arr[4][1][1][0]+" "+arr[4][1][4][3]
// let key=arr[4][1][4][1]
// console.log({key:res});