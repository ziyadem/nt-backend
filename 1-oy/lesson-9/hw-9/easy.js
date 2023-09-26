//1
// function equal(arr) {
//     if(arr[0]-arr[arr.length-1]===0) {return 0}else{return arr[0] + arr[arr.length - 1];}
// }
// console.log(equal([1, 2, 3, 9]));

//2
// setInterval(() => {
//     let s=''
//     let date = new Date();
//     s += `${
//       date.getHours() < 10 ? "0" + `${date.getHours()}` : date.getHours()
//     }-${
//       date.getMinutes() < 10 ? "0" + `${date.getMinutes()}` : date.getMinutes()
//     }-${
//       date.getSeconds() < 10 ? "0" + `${date.getSeconds()}` : date.getSeconds()
//     }  ${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`;
//     console.log(s);  
// }, 1000);

//3
// function parityAniysis(a) {
//     let b=a+''
//     sum=0
//     for (let i = 0; i < b.length; i++) {
//         sum+=Number(b[i])
//     }
//     return a%2===sum%2
// }
// console.log(parityAniysis(243));

//4
// function showNumber(a) {
//     setTimeout(() => {
//         let b = parseInt(a,2);
//         console.log(b);  
//     }, 5000);
// }
// showNumber('0101001')

//5
// function changeValue(arr) {
//     let a=arr[0].toLowerCase()
//     let res=[]
//     if(a==arr[0]){res.push(`${a.toUpperCase()}!`);}else{res.push(`${a}!`)}
//     res.push(arr[1]+=1)
//     if(arr[2]){res.push(false)}else{res.push(arr[2])};
//     console.log(res);
// }
// changeValue(['a',12,true])