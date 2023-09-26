
//Hard 1 -task
// function dubleSwap(text, let1, let2) {
//     let str = ''
//     let a = 0, b = 0

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === let1) {
//             a++
//         }
//         if (text[i] === let2) {
//             b++
//         }
//     }
//     if (a > 0 && b > 0) {
//         for (let j = 0; j < text.length; j++) {
//             if (text[j] === let1) {
//                 str += let2
//             } else if (text[j] === let2) {
//                 str += let1
//             } else {
//                 str += text[j]
//             }
//         }
//     } else{
//         console.log('Harf topilmadi!');
//     }


//     console.log(str);

// }


// dubleSwap("aabbcc", 'a', 'c')



//hard 2-task
// function minSwaps(txt, txt2){

//     let str = txt + txt2
//     let count1 = 0, count0 = 0

//     for(let i =0; i< str.length; i++){
//         if(str[i] == 1){
//             count1++
//         } 

//         if(str[i] == 0){
//             count0++
//         }
//     }

//     if(count1 > count0){
//         console.log(1);
//     } else if(count0 > count1){
//         console.log(0);
//     }else{
//         console.log('teng!!');
//     }

// }

// minSwaps("11011111000d", "00sdsd11")