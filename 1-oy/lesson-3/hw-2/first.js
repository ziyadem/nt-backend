//1
// let obj = {
//   name: "Toshmat",
//   surname: "Toshmatov",
//   age: 23,
// };
// function keys(obj) {
//     let res=[]
//     for(k in obj){     
//         res[res.length]=k
//     }
//     console.log(res);
// }
// function values(obj) {
//     let res=[]
//     for(k in obj){     
//         res[res.length]=obj[k]
//     }
//     console.log(res);
// }
// function keys_values(obj) {
//     let res = [];
//     let res1 = [];
//     for (k in obj) {
//       res[res.length] = k;
//       res1[res1.length] = obj[k];
//     }
//     let resultate = [];
//     resultate[0]=res;
//     resultate[1] = res1;
//     console.log(resultate);
// }
// keys(obj)
// values(obj)
// keys_values(obj)

//2
// let obj={
//     zero:0,
//     one:1,
//     two:2,
//     three:3,
//     four:4,
//     five:5,
//     six:6,
//     seven:7,
//     eight:8,
//     nine:9
// }
// }
// keys(obj)
// values(obj)
// keys_values(obj)

//2
// let obj={
//     zero:0,
//     one:1,
//     two:2,
//     three:3,
//     four:4,
//     five:5,
//     six:6,
//     seven:7,
//     eight:8,
//     nine:9
// }
// }
// keys(obj)
// values(obj)
// keys_values(obj)

//2
// let obj={
//     zero:0,
//     one:1,
//     two:2,
//     three:3,
//     four:4,
//     five:5,
//     six:6,
//     seven:7,
//     eight:8,
//     nine:9
// }
// function drop(obj,n) {
//     for(k in obj){
//         if(obj[k]==n){
//             delete obj[k]
//         }
//     }
//     let res=Object.isFrozen(obj)
//     console.log(obj,res);
// }
// drop(obj,1)

//3
// function number(a,b) {
//    let res = {
//     numbers:Number(a.toString() + b.toString()),
//    }
//    Object.seal(res);
//    console.log(res,Object.isSealed(res));
// }
// number(10,30)

//4
// function oddOrEven(fruit) {
//     let obj={
//         bool:(fruit.length>6),
//     }
//     Object.freeze(obj)
//     console.log(obj,Object.isFrozen(obj));
// }
// oddOrEven('apple')

//5
// function createNewObj(a) {
//     let newObj={}
//     let obj={
//     zero:0,
//     one:1,
//     two:2,
//     three:3,
//     four:4,
//     five:5,
//     six:6,
//     seven:7,
//     eight:8,
//     nine:9
//     }
//     if(a>9) return console.log("bu soon obj keylaridan katta", Object.isFrozen(newObj));
//     for(k in obj){
//         if(obj[k]<=a){
//             newObj[k]=obj[k]
//         }
//     }
//     console.log(newObj, Object.isFrozen(newObj));   
// }
// createNewObj(10)

//6
// function lastItem(arr) {
//     let res={
//         lastitem:arr[arr.length-1]
//     }
//     Object.seal(res);
//     Object.freeze(res);
//     console.log(res);
// }
// lastItem([1,2,3,4,])