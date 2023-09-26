// 3
//  function helloNamems(name) {
//     let nameLength=name.length
//     let resName=''
//     if(nameLength>10){
//         console.log(`hello ${name}!`.toUpperCase());
//     }
//     else{
//         resName +=name[0].toUpperCase()
//         for (let i = 1; i < name.length; i++) {
//             resName +=name[i].toLowerCase ()      
//         }
//         console.log(`Hello ${resName}!`);
//     }
//  }
//  helloNamems('maxkamovaziyoda')

//4
// function firstTwo(text) {
//     let res=''
//     if(text.length>=2){
//         res +=text[0]+text[1]
//         console.log(res);
//     }
//     else{console.log('yetarli soz mavjud emas');}
// }
// firstTwo('Hello')

//5
// function addText(text1,text2,num) {
//    let text=text1+text2
//    let res=''
//    if(text.length>=num){
//        for (let i = 0; i < num; i++) {
//         res +=text[i].toUpperCase()   
//        }
//        console.log(res);
//    }else{
//     console.log('kiritilgan raqam umumiy harflar miqdoridan kop');
//    }
// }
// addText('About javascript or','typeScript',16)

//  6
// function comboString(txt1,txt2) {
//     let res = txt1.toUpperCase() + txt2.toUpperCase() + txt1.toUpperCase();
//     let Length=res.length;
//     let index=txt1.length;
//     console.log(res,Length,index);
// }
// comboString('hello','world')

//7
// function stringMassiv(params) {
//     let arr=params.split(' ')
//     console.log(arr);
// }
// stringMassiv('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptate.')

//8
// let res=0
// for (let i = 1; i <= 100; i++) {
//         if(i%3==0){
//             res +=i;
//         }
//         if (i % 5 == 0) {
//           res += i;
//         }
//         if (i % 7 == 0) {
//           res += i;
//         }
//         if(i%15==0){
//             res -=i
//         }
//         if (i % 21 == 0) {
//           res -= i;
//         }
//         if (i % 35 == 0) {
//           res -= i;
//         }
        
//     }
//     console.log(String.fromCharCode(res));

//9
//charCodeAt=> UFT-16
//codePointAt=> Unicode
// let js='Javascript'
// let res=0
// for (let i = 0; i < js.length; i++) { 
//     res += js[i].charCodeAt(0);
// }
// console.log(res);

//10
// function funcName(txt) {
//   let res=0
//   for (let i = 0; i < txt.length; i++) {
//       res += txt[i].charCodeAt(0);
//   }
//   console.log(res%7);
// }
// funcName("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptate.");

// 11
// function isSumeNum(a,b) {
//     if(a===b){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// isSumeNum(2, 2);
// isSumeNum('2',2)
// isSumeNum(2, 3);

//12
// function samiFirstLast(arr) {
//     let s=0
//    for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i]==arr[j]){
//            s++;
//         }   
//      } 
//    }
//    if(s>0){
//     console.log(true);
//    }else{
//     console.log(false);
//    }
// }
// samiFirstLast([1,2,3,4,67,])

//13
// let a=12.98378
// console.log(a.toFixed(0));

//14
// let a=49
// let b=(a/15).toFixed(0)
// if (Number(b) < 10) {
//   b=Number(b);
//   console.log(typeof b);
// } else {
//   console.log(typeof b);
// }

//15
// let text='jhadsioudsuMENkdjpajiJAVASCRIPTasdviuhaoiuvjiuhaoiuDASTURCHIMANufhpauw'
// let res=''
// for (let i = 0; i < text.length; i++) {
//     if(text[i]===text[i].toUpperCase()){
//         res+=text[i]
//         if (text[i+1] === text[i+1].toLowerCase()) {
//           res += ' ';
//         }
//     }  
// }
// console.log(res);

//16
// const str = 'dolor';
// let str1 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos repudiandae laudantium assumenda ratione veritatis mollitia ipsam aperiam. Harum, assumenda.";
// const findIndex = (arg, value) => {
//   const arr = arg.split(" ");
//   let sum = " ";
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     index +=arr[i].length +1
//     if (arr[i] == value) {
//       sum = arr[i];
//       index -=arr[i].length;
//       return console.log(index);    
//     }
//   }
//   console.log(sum.length);
//   console.log(index);
// };
// findIndex(str1, str);

//17
// let txt='about javascript or node.js'
// let arr=txt.split(' ');
// upperCase=txt.toUpperCase()
// lowerCase=txt.toLowerCase()
// console.log('upperCase:',upperCase);
// console.log("lowerCase:", lowerCase);
// console.log("startWidth:", txt[0] + txt[1]);
// console.log("endWidth:", txt[txt.length-2] + txt[txt.length-1]);
// let index=0
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], "length:", arr[i].length,'index:',index);
//     index+=arr[i].length+1
// }

//18
// let txt =
//   "Lorem IpSum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos repudiandae laudantium assumenda ratione veritatis mollitia ipsam aperiam. Harum, assumenda.";
// function textName(txt,name) {
//     let arr=txt.split(' ');
//     let s=0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].toLowerCase()===name.toLowerCase()){
//             s+=1;
//         }
//     }
//     if(s>0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// textName("Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos repudiandae laudantium assumenda ratione veritatis mollitia ipsam aperiam. Harum, assumenda.",'loreM');