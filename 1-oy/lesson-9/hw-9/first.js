//1
// function pow(a,b) {
//     res=a**b
//     return console.log(res); 
// }
// pow(3,7)

//2
// function max(arr) {
//     let max=arr[0]
//     arr.forEach(e => {
//         if(max<=e) max=e
//     });
//     return console.log(max);
// }
// max([9,0,7,76])

//3
// function chesk(a) {
//     return (b)=> {
//         return (c)=>{
//             return (a+b==c || a-b==c || a/b==c || a*b==c)
//         }
//     }   
// }
// console.log(chesk(12)(13)(25));

//4
// let arr=[]
// let s=0
// function checkNumber(a) {
//     let obj={}
//     if(a==0){
//         obj.arr=arr;
//         obj.sum=s;
//         return obj
//     }if (a > 0) {
//       s=s+a;
//       arr[arr.length] = a;
//       return checkNumber(a - 2);
//     }
// }
// console.log( checkNumber(10));

//5
// let arr=[0]
// let s=0
// function repSet(a) {
//     if(arr[0]===0){arr[0]=a}
//     if(a===0){
//         arr=arr[0]
//        return arr
//     }
//     if(a>0){
//         arr=[arr]    
//         return repSet(a-1)
//     }
// }
// console.log(repSet(3));

//6

// let funk=(a,b,opr)=> {
//     let s=0
//     opr==='+' ? s=a+b : opr==='*' ? s=a*b :opr==='-' ? s=a-b : s='bunday amal topomaadik'
//     return s
// }
// console.log(funk(2,3,'+'));