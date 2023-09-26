//1
// function getMaxSumSub(arr,a) {
//     let new_arr=[]
//     for (let i = 0;i< arr.length; i++){
//         for (let j = i; j < arr.length; j++) {
//             if(arr[i]+arr[j]==a){
//                 new_arr.push([arr[i],arr[j]])
//             }
//         }
//     }
//     return new_arr
// }
// console.log(getMaxSumSub([1, 2, 4, -2, 3], 5));

//2
// function actionNumber(arr) {
//     let s=arr[0]
//     let d=arr[0]
//     let m=arr[0]
//     let k=arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         s=s+arr[i]
//         d=d/arr[i]
//         m=m-arr[i]
//         k=k*arr[i]
//     }
//     let res={
//         add:s,
//         divide:d,
//         minus:m,
//         multy:k,
//     }
//     return res
// }
// console.log(actionNumber([15,5,3]));

//3
// function getFirstValandAdToArray(arr) {
//     let res=[]
//     for (let i = 1; i < arr.length; i++) {
//         res[res.length]=arr[i]
//     }
//     res[res.length]=arr[0]
//     return res
// }
// console.log(getFirstValandAdToArray([1, 2, 3, 4, 5]));

//4
// function macePair(arr) {
//     let s=0
//     for (const i of arr) {
//         s+=i
//     }
//     arr[arr.length]=s
//     return arr
// }
// console.log(macePair([2, 45, 7]));

//5
// function drop(arr,a) {
//     let newArr=[]
//     for (const i of arr) {
//         if(i !== a){
//             newArr[newArr.length]=i
//         }
//     }
//     return newArr
// }
// console.log(drop([1,2,3,4],1));

//6
// function changeToArr(obj,a) {
//     let arr=Object.values(obj)
//     arr.push(arr.includes(a));
//     return arr
// }
// console.log(changeToArr({n:12,k:34},1));

//8
// function incrementItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i]+=1
//     }
//     return arr
// }
// console.log(incrementItems([1, 2, 3, 4, 5]));

//9
// function getStingLength(arr) {
//     let res=[]
//     for (const i of arr) {
//         let k=i.length
//         res.push(k)
//     }
//     return res
// }
// console.log(getStingLength(['kjdfv','sdkj','dj']));


//praktika
// let a=7777777;
// let res=a.toString()
// let s=0
// let k=''
// for (let i = res.length-1; i >=0 ; i--) {
//      s+=1
//      k +=res[i]
//      if(s%3==0) {
//         k+='.'
//      } 
// }
// let resultat=''
// for (let i = k.length - 1; i >= 0; i--) {
//   resultat+=k[i]
// }
// console.log(resultat); 

//palindrom
// let a=1257787521
// let k=a.toString()
// let s=0;
// for (let i = 0; i < k.length/2; i++) {
//     if (k[i] !== k[k.length - (i + 1)]) {
//        s+=1
//     }     
// }
// if(s!=0){
//     console.log('Palindrm son emas');
// }else{
//     console.log('Palindrom son');
// }

//10
// function stringToarry(str,a) {
//     let arr=[]
//     for (let i = 0; i < a; i++) {
//         arr.push(str[i])
//     }
//     return arr
// }
// console.log(stringToarry('Hello',3));

//11
// function addArry(a,b) {
//     let res=[]
//     let arr=[...a,...b]
//     res[0]=arr
//     res[1] = [{ length: arr.length }];
//     return res
// }
// console.log(addArry([1, 2, 3], [4, 5]));

//12
// function findIndex(arr,str) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==str){
//             return i
//         }
//     }
// }
// console.log(findIndex(['sdc','dcw','aa'],'aa'));

