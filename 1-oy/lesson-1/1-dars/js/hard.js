// hard 2

// function minSwaps(num1) {
//     let one=0
//     let zero=0
//     for (let i = 0; i < num1.length; i++) {
//         if(num1[i]==1){one +=1}
//         else{zero +=1}
//     }
//     if(one>=zero){
//         return console.log(1);
//     }else{
//         return console.log(0);
//     }
// }

// minSwaps('11100100000')


//hard3
// function wordedMath(qoshiluvchi,ishora,qoshuvchi) {
//     a=Number(qoshiluvchi)
//     b=Number(qoshuvchi)
//     let res=0
//     let arr=['nol','bir','ikki','uch','tort','besh','olti','yetti','sakkiz','toqqiz','on']
//     if(ishora==='plus'){
//         c=a+b;
//         res=arr[c]
//     }
//     if(ishora==='minus'){
//         c=a-b;
//         res=arr[c]
//     }
//     console.log(res);
// }
// wordedMath('10','minus','4')
// wordedMath('1','plus','4')

//hard4
// function wordedMath(pr1,ishora,pr2) {
//     let arr=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
//     let a=0;
//     let b=0;
//     let res=0;
//     for (let i = 0; i < arr.length; i++) {
//            if(arr[i]===pr1) {
//               a=i
//            }
//            if(arr[i]===pr2) {
//             b=i
//          }
//     }
//     if(ishora==='plus'){
//         c=a+b;
//         res=arr[c]
//     }
//     if(ishora==='minus'){
//         c=a-b;
//         res=arr[c]
//     }
//     console.log(res);
// }
// wordedMath('one','plus','two')
// wordedMath('ten','minus','two')