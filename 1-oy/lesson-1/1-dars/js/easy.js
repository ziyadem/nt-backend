//easy1
// function wordCount(num){
//     let word=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
//      let s=word[+num];
//      let res='';
//      if(num==0){
//         console.log(0);
//      }
//      for(i=1;i<= Number(num);i++){
//         res +=s;
//      }
//      console.log(res);
// }
// wordCount('0')


//easy2
// function doubleChar(text) {
//     let res=''
//     for(i=0;i<text.length;i++){
//         res +=text[i]+text[i]
//     }
//     console.log(res);
// }
// doubleChar('Hello World')


//easy3

// function isValid(prs) {
//     let res=false;
//     for (let i = 0; i < prs.length; i++) {
//         if(prs[i] !== '0'){
//             if (parseInt(prs[i])) {
//              res=true;  
//             }
//             else{
//                 res=false
//                 return  console.log(res);
//             }        
//         }

//     }
//     console.log(res);
// }
// isValid('9801080001kf')


//easy4
// function changeText(prs) {
//     let res=''
//     for (let i = prs.length-1; i >=0; i--) {
//         res +=prs[i]        
//     }
//     console.log(res);
// }
// changeText('Hello world')


//easy5
// function checkNumber(prs) {
//     let s=0
//     for (let i = 0; i < prs.length; i++) {
//         if (Number(prs[i])) {
//             s +=Number(prs[i])
//         }
//     }
//     if(s>10){
//         console.log(true);
//     }else if(s==0){
//         console.log('matnda som qatnashmagan');
//     }else{
//         console.log(false);
//     }
 
// }
// checkNumber('lkjdq dcj  kjsd  k 8 4 8 9 lkfw 4')


//easy6
// function checkStr(str1,str2) {
//     let res='';
//     if(str1.length>str2.length){
//         for(i=0;i<str1.length;i++){
//             res +=str1[i].toUpperCase() + str2.toLowerCase()
//         }
//     }else{
//         for(i=0;i<str2.length;i++){
//             res +=str2[i].toUpperCase() + str1.toLowerCase()
//         }

//     }
//     console.log(res);
// }
// checkStr('Hello','Hillkflkfg')









































// function showToStringNumber(n){
//     let numbersToStr = ['nol', 'bir', 'ikki'];

//    let res = numbersToStr.filter((num, idx) => idx === n);
//    return res;
// }

// let [numberStr] = showToStringNumber(5);

// console.log(numberStr);


// function isValid(text){
//     let isBool = false;

//     for(let i = 0; i < text.length; i++){    
//         if(+text[i]){
//         } else{
//             isBool = true;
//         }
//     }
//     if(isBool) return false;
//     return true;
// }

// let res = isValid('2342454 54334');

// console.log(res);

/*
function numberToWord(num1, amal, num2){
    //let mathsOp = ['plus', 'minus', 'multiply', 'divide']
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  let n1, n2;
   for(let n = 0; n < numbers.length; n++){
    if(numbers[n] === num1){
        n1 = n
    }
    if(numbers[n] === num2){
       n2 = n
    }
   }
     if(amal == 'minus'){
        let sum = n1 - n2
        return numbers[sum]
        
    }
    if(amal == 'plus'){
        let sum = n1 + n2
        if(sum > 10){
            return sum
        }
        return numbers[sum]
        
    }


}

let res = numberToWord('ten', 'minus', 'three')
let res2 = numberToWord('one', 'plus', 'three')

console.log(res2);

*/


//task 1 easy

// function wordCount(num){
//     let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
//     let str = numbers[+num]



//     let newStr = ''

//     for(let i = 0; i < num; i++){
//         newStr += str

//     }
    
//     console.log(newStr);

// }

// wordCount("7")

// console.log( typeof '34');
// console.log( typeof +'34');
// console.log( +'34');
// console.log('34');

