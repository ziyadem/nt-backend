//1
// function cheskToArr(arr1,arr2) {
//     let s=0
//     arr1.forEach(e => {
//        arr2.forEach(k => {
//         if(e===k){s++}
//        }); 
//     });
//     if (s != 0) {
//       return true;
//     }else{
//       return false;
//     }
// }
// console.log(cheskToArr([1,2,3],[4,3,5,6,9]));

//2
// function sortArr(arr1,arr2) {
//    let s= arr1.concat(arr2)
//    s.sort(function (a, b) {
//      if (a > b) return 1;
//      if (a < b) return -1;
//      return 0;
//    });
//    let res=[]
//    let res2=[]
//    for (let i = s.length-1; i >=0; i--) {
//     res.push(s[i])
//     res2.push('nodejs');
//    }
//    console.log(s,res,res2);
// }
// sortArr([10,2,3],[5,8]);

//3
// function numberSplit(a) {
//     let res=a/2
//     let b = +res.toFixed(0);
//     console.log([a-b,b]);
// }
// numberSplit(11);
// numberSplit(10);

//4
// function sortByLength(a) {
//     a.sort()
//     console.log(a);
// }
// sortByLength(['aa','sduhdfs','ddd','a'])

//5
// function filterArr(arr) {
//   let res = [];
//   let s = 0;
//   arr.forEach((e) => {
//     if (Number(e)) {
//       res.push(e);
//       s++;
//     }
//   });
//   res.push(s);
//      res.sort(function (a, b) {
//        if (a > b) return 1;
//        if (a < b) return -1;
//        return 0;
//      });
//   console.log(res);
// }
// filterArr([1,5,23,'as','asdlkd'])

//6 
// function sumOfCubes(a) {
//     let res=[]
//     let sum=0
//     a.forEach(e => {
//         res.push(e**3)
//         sum+=e**3
//     });
//     res[res.length]={add:sum}
//     console.log(res);
// }
// sumOfCubes([1,2,5])

//7
// function changeAddSprtArr(a) {
//     let juft=[]
//     let toq=[]
//     a.forEach(e => {
//         if(e%2==0){
//            juft.push(e*7)
//         }else{
//             toq.push(e*5)
//         }
//     });
//     let b=juft.concat(toq)
//      b.sort(function (a, b) {
//        if (a > b) return 1;
//        if (a < b) return -1;
//        return 0;
//      });
//     console.log(b);
// }
// changeAddSprtArr([1,3,7,6,4,9,10])

//8
// function findNum(a) {
//     let s=0
//     a.forEach(e => {
//         s+=e
//     });
//     console.log(s/a.length);
// }
// findNum([1,5,6,4])

//9
// function formatPhoneNumber(a) {
//     if(a.length==10){
//         let res = `(${a[0]}${a[1]}${a[2]})  ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
//         console.log(res);
//     }else{
//         console.log('mumkin emas');
//     }
// }
// formatPhoneNumber([1,2,3,4,5,6,7,8,9,1])

//10
// function toArr(a) {
//     let res=Array.from(a.toString())
//     console.log(res);
// }
// toArr('dlksjnds123')
// function toNum(a) {
//     let s=''
//     a.forEach(e => {
//         if(Number(e)){
//            s+=e
//         }
//     });
//     console.log(Number(s));
// }
// toNum([1,3,4,5,'dsj'])

//11
// function minMax(a) {
//     let max=a[0]
//     let min= a[0];
//     for (let i = 1; i < a.length; i++) {
//         if(max<a[i]){
//             max=a[i]
//         }
//         if(min>a[i]){
//             min=a[i]
//         }
//     }
//     console.log([min*5,max*5]);
// }
// minMax([1,4,7,2,9])

//13
// function reverseImage(array) {
//     let res=[]
//     for (let i =  array.length-1; i >=0; i--) {
//         let index=[]
//         for (let j =array[i].length-1;j>=0; j--) {
//             index.push(array[i][j])
//         }
//         res.push(index)
//     }
//     console.log(res);
// }
// reverseImage([[1, 4, 2, 7, 9, 12],[3,5,6],[1,8,67]]);

//14
// function numberToString(a,b) {
//     let arr=['one','two','three','four','five','six','seven','eight','nine','ten']
//     let res=[]
//     for (let i =a-1 ; i < b; i++) {
//         res.push(arr[i])
//     }
//     console.log(res);
// }
// numberToString(3,8)

//15
// function replace(str,a,b) {
//     let res=''
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]==a){
//              res+=b
//         }else{
//             res+=str[i]
//         }
//     }
//     console.log(res);
// }
// replace('hello world','l','k')