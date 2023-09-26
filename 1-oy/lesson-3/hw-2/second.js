//1
// let obj1={
//     name:'toshmat',
//     age:17,
// }
// let obj2={
//     name:'toshmat',
//     age:12,
// }
// function resultObj(obj1,obj2) {
//     if(obj1.name===obj2.name && obj1.age===obj2.age){
//         Object.freeze(obj1)
//         return obj1
//     }else{
//         Object.seal(obj1);
//         Object.seal(obj2);
//         return console.log(obj1,obj2);
//     }
// }
// console.log(resultObj(obj1, obj2));

//2
// function findMaxWidth(obj) {
//     if(obj.piano>obj.stereo){
//         console.log('piano');
//         return Object.defineProperty(obj, 'piano', {
//             writable: false 
//         });                  
//     }else{
//         console.log("stereo");
//         return Object.defineProperty(obj, "stereo", {
//           writable: false,
//         }); 

//     }
// }
// findMaxWidth({piano:500,stereo:600})

//4
// let arr1 = ["a", "b", "c"];
// let arr2 = [1,2,3];
// function keyandValues(arr1,arr2) {
//     let res={}
//     for (let i = 0; i < arr1.length; i++) {
//         res[arr1[i]] = arr2[i];
//     }
//     console.log(res);
// }
// keyandValues(arr1,arr2)

//6
// function cheskObj(obj) {
//     let a=Object.keys(obj)
//     if(a.length===0){
//         return console.log(obj);
//     }else{
//         let result = Object.preventExtensions(obj);
//         obj.name = "Anv";
//         obj.age = 12;
//         console.log(obj);

//     }
// }
// cheskObj({})

//8
// function inkLevals(obj) {
//     let res=Object.values(obj)
//     let s=0
//     res.forEach(e => {
//         s+=Number(e)
//     });
//     obj.sum=s;
//     console.log(obj);
//     Object.freeze(obj)
    
// }
//  inkLevals({
//     'cyan':23,
//     'magenta':12,
//     'yellow':10
//  })

//9
// function addProperty(obj,key,val) {
//     if(obj[key]){
//         obj[key]=val;
//         Object.freeze(obj)
//         console.log(obj);
//     }else{
//         console.log('Bunday key mavjujd emas');
//     }
// }
// addProperty({name:"Towmat"},'name','Ewmat') 

//10
// function getProperties(obj,n) {
//     let user=Object.entries(obj)
//     let res={}
//     if(user.length>n){
//         for (let i = 0; i < n; i++) {
//             let a=user[i]
//             let b=a[0]
//             res[b]=a[1]
//         }
//         console.log(res);
//         Object.preventExtensions(obj)
//     }else{
//         console.log('obj lengthidan kop');
//     }
// }
// getProperties({
//     name:'towmat',
//     surname:'Ewmatov',
//     age:12,
// },2)
            

//11
// function returnNegative(n) {
//     let obj={
//         negative:(-1)*n,
//     }
//     let result = Object.defineProperty(obj, 'negative', {
//     enumerable: true,
//     writable: true , 
//     configurable: true, 
//     });
//     console.log(obj);
// }
// returnNegative(13)

//12
// function checkTwoVal(a,b) {
//     let obj={}
//     if(a%2===0 && b){
//     let result = Object.defineProperty(obj, 'value', {
//     value:true,
//     enumerable: true,
//     writable: true , 
//     configurable: true, 
//     });
//     }else if(a%2===0 || b){
//     let result = Object.defineProperty(obj, 'value', {
//     value:false,
//     enumerable: true,
//     writable: true , 
//     configurable: true, 
//     });
//     }else{
//     let result = Object.defineProperty(obj, 'value', {
//     value:false,
//     enumerable: true,
//     writable: true , 
//     configurable: true, 
//     });
//     }
//     console.log(obj);
// }
// checkTwoVal(12,true);
// checkTwoVal(12,false);
// checkTwoVal(15,false);
// checkTwoVal(15, true);

//13
// function dollorCurse(a) {
//     let obj={
//         $:a*10000,
//     }
//     Object.seal(obj)
//     console.log(obj);
// }
// dollorCurse(4)

//15
// function degreeOfnumber(a,b) {
//     let obj={}
//      let result = Object.defineProperty(obj, "value", {
//        value: a ** b,
//        enumerable: true,
//        writable: true,
//        configurable: true,
//      });
//     console.log(obj);
// }
// degreeOfnumber(4,7)