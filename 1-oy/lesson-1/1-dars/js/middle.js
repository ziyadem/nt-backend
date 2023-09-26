// middle1
// function changgeZeroToOne(text) {
//     let res=''
//     for (let i = 0; i < text.length; i++) {
//         if(text[i]=='1'){
//             res +=0
//         }else{
//             res +=1
//         }
//     }
//     console.log(res);
// }

// changgeZeroToOne('111011101111')

//middle2
// function countLetters(text,t) {
//     let res=0
//     for (let i = 0; i < text.length; i++) {
//         if(text[i].toLowerCase()===t.toLowerCase()){
//             res +=1
//         }
//     }
//     console.log( 'count', res);
// }
// countLetters('ud iudsiou Tuatpoam astijo aiw','t')

//middle3
// function decimator(p) {
//     let all_length =p.length;
//     let number_length=0
//     for (let i = 0; i < p.length; i++) {
//         for (let j = 0; j < 10; j++) {
//             if(i==j){
//                number_length +=1;
//             }
            
//         }
//     }
//     remove_length=all_length-number_length;
//     console.log("all_length",all_length);
//     console.log('number_length',number_length);
//     console.log('remove_length',remove_length);
// }

// decimator('test1234567890javascript')

//middle4
// function findIdx(text,t) {
//     let arr=[]
//     for (let i = 0; i < text.length; i++) {
//         if(text[i]===t){
//             arr[arr.length]=i.toString()
//         }
//     }
//     console.log(arr);
// }

// findIdx('zvihspzdudsj dvnpisdp Zfdopizop soie wpwzjsnd lso','z')