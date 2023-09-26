// class MyMath { 
//     static myRound(a){
//         let k=a + ''
//         let res=''
//         let n=''
//         for (let i = 0; i < k.length; i++) {
//             if(k[i]!=='.'){
//                 res+=k[i]
//             }
//             else{
//                n=k[i+1]
//                i=k.length
//             }
//         }
//         let resN=+res
//         if(+n>4){
//             resN++
//         }
//         return resN
//     }   
//     static myCeil(b){
//         let k=b + ''
//         let res=''
//         let n=''
//         let s=0
//         for (let i = 0; i < k.length; i++) {
//             if(k[i]!=='.' && s==0){
//                 res+=k[i]
//             }
//             else{
//                 if(k[i+1] == "0"){
//                     s+=1
//                 }
//                 n+=k[i]
//             }
//         }
//         let resN=+res
//         if(+n*4){
//             resN++
//         }
//         return resN
//     }
//     static myMax(...arr){
//         if(Array.isArray(arr[0])){
//             let max=0
//             for (let i = 0; i < arr[0].length; i++) {
//                 if(max<=arr[0][i]){max=arr[0][i]}
//             }
//             return max
//         }else{
//              let max = 0;
//              for (let i = 0; i < arr.length; i++) {
//                if (max <= arr[i]) {
//                  max = arr[i];
//                }
//              }
//              return max;
//         }
//     }
//     static myMin(...arr){
//         if(Array.isArray(arr[0])){
//             let min=0
//             for (let i = 0; i < arr[0].length; i++) {
//                 if(min>=arr[0][i]){min=arr[0][i]}
//             }
//             return min
//         }else{
//              let min = 0;
//              for (let i = 0; i < arr.length; i++) {
//                if (min >= arr[i]) {
//                  min = arr[i];
//                }
//              }
//              return min;
//         }
//     }
//     static myPow(x,y){
//         let res=x**y
//         return res
//     }
//     static mysqrt(x){
//         let res=x**(1/2)
//         return res
//     }
//     static myabs(x){
//         if(x>0){
//             return x
//         }else if(x<0){
//             return x*(-1)
//         }else if(x==0){
//             return 0
//         }else{
//             return x*'men'
//         }
//     }
//     static mysign(x){
//         if(x>0){
//             return 1
//         }else if(x<0){
//             return -1
//         }else if(x==0){
//             return 0
//         }else{
//             return x*'men'
//         }
//     }
// }
// let k=MyMath.myRound(13.4)
// console.log(k);
// let k2=MyMath.myCeil(13.06)
// console.log(k2);
// let k3=MyMath.myPow(2,'men')
// console.log(k3);
// let k4=MyMath.mysqrt(2)
// console.log(k4);
// let k5=MyMath.myabs('jy')
// console.log(k5);
// let k6=MyMath.mysign(9)
// console.log(k6);
// let k7=MyMath.myMax(1,4,8,-9,0)
// console.log(k7);
// let k8=MyMath.myMin([1,4,8,-7,-9,0])
// console.log(k8);




