//1
// let arr=[
//     {
//         name:'A',
//         country:{
//             name:'Kazakistan',
//             region:"Astana"
//         }
//     },
//     {
//         name:'B',
//         country:{
//             name:'Uzbekistan',
//             region:"Tashkent"
//         }
//     }
// ]
// let [,{country:{name,region}}]=arr
// let res1 = `My country is ${name}`;
// let res2 = `My copital of my country is ${region}`;
// console.log(res1);
// console.log(res2);

//2
// let arr=[2,5,8,34,6];
//push() metodi arr ga oxiridan element qoshadi
// arr.push(12)
// console.log(arr);
// shift() metodi arr dan boshidan element ochiradi
// arr.shift()
// console.log(arr);
//splice orqali shift metodi
// arr.splice(0,1)
//scpice orqai push metodi
// arr.splice(arr.length,0,'a')
// console.log(arr);
// Array.prototype.myToString=function(){
//     for (let i = 0; i < this.length; i++) {
//         let res=this[i] + '' 
//         console.log(res);    
//     }
//     return 
// }
// arr.myToString();

//3
// let user={
//     first_name:'John',
//     lastName:"Doe",
//     age:23,
//     color:'red',
//     fav_car:'BMW'
// }
// Object.prototype.mySeal=function(obj){
//     for (const key in obj) {
//         Object.defineProperty(user, key, {
//           configurable: false,
//         });     
//     }
// }
// Object.mySeal(user)

//5
// text="NodeJs Developer"
// let res1=[];
// let toq=0;
// let juft = 0;
// let max=0;
// let res3=[]
// let str=['zero','one','two','three','four','five','six','seven','eight','nine']
// for (let i = 0; i < text.length; i++) {
//    let k= text[i].charCodeAt(0)
//    res1[res1.length]=k
//    if(k%2==0){juft+=k}else{toq+=k}
// }
// let res2=[toq,juft]
// if(toq>=juft){max=toq}else{max=juft}
// let maxS=max.toString()
// for (let i = 0; i < maxS.length; i++) {
//     res3[res3.length]=maxS[i]
// }
// for (let i = 0; i < maxS.length; i++) {
//     res3[res3.length]=str[res3[i]]
// }
// console.log(res1);
// console.log(res2);
// console.log(res3);

//6
// let user={
//     name:'Toshmat',
//     surname:"Toshmatov",
//     age:23
// }
// function keys(obj) {
//     let keys=[]
//     for (const i in obj) {
//         keys[keys.length]=i
//     }
//     return console.log(keys);
// }
// function values(obj) {
//     let values=[]
//     for (const i in obj) {
//         values[values.length]=obj[i]
//     }
//     return console.log(values);
// }
// keys(user);
// values(user);

//7
// let arr = [2, 5, 8, 34, 6];
// Array.prototype.myPush=function(a){
//     this[this.length]=a
//     return  console.log(this);
// }
// arr.myPush(1);

