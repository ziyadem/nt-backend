//1
// const obj={two:2}
// var {one,two}=obj
// console.log(one);
//undefinde chiqadi sabab bunaqa key yoq

//2
// function totalAmontAjective(obj) {
//     let res=Object.keys(obj).length;
//     console.log(res);
// }
// totalAmontAjective({ a: "moronc" });
// totalAmontAjective({ a: "moronc", b: "nimadr" });
// totalAmontAjective({ a: "moronc", b: "nimadr",c:"nimalardir" });

//3
// function isInRange(a,obj) {
//     let {min,max}=obj;
//     return  (a>=min && a<=max)
// }
// console.log(isInRange(4, { min: 0, max: 5 }));

// function isInRanges(a,obj) {
//     let {min,max}=obj;
//     if(a>=min && a<=max){
//         console.log(true);
//     }
// }
// isInRanges(4, { min: 0, max: 5 });

// 4
// function mostExpensiveItem(obj) {
//     let a=Object.values(obj)
//     let b = Object.keys(obj);
//     let max=a[0]
//     let index=0
//     for (let i = 0; i < a.length; i++) {
//         if(max<=a[i]){
//             max=a[i]
//             index=i
//         }
//     }
//     return b[index]
// }
// console.log(mostExpensiveItem({ piano: 2000 }));
// console.log(mostExpensiveItem({ tv: 30, skate: 20 }));
// console.log(mostExpensiveItem({ tv: 30, skate: 20,stereo:50, }));

//5
// texno plov internet
// function addName(obj,k,v) {
//     obj.k=v
//     Object.freeze(obj)
//     console.log(obj);
// }
// addName({piano:500},"Bratus",400)

//praktika
// function moveZeros(arr) {
//   let res1 = [];
//   let res2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       res1.push(arr[i]);
//     } else {
//       res2.push(arr[i]);
//     }
//   }
//   let res = res1.concat(res2);
//   return res;
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//6
// function mostExpensive(obj) {
//   let max=''
//   if(obj.piano>obj.stereo){
//        max='piano'
//   }else{max='stereo'}
//   res={
//     ...obj,
//     text:`The most expensive one is the ${max} Ring`
//   }
//   console.log(res);
// }
// mostExpensive({piano:500,stereo:700})

//destrucsiya
// let qitalar={
//   Osiyo:{
//     title:"Osiyo",
//     countres:{
//       Uzbekiston:"Uzbekiston",
//       Tojikiston:"Tojikiston",
//       Turkmaniston:"Turkmaniston",
//       Qirgiziston:"Qirgiziston",
//       Avgoniston:"Avgoniston",
//       Braziiya:"Braziiya",
//       Argentina:"Argentina",
//     }
//   },
//   Yevropa :"Yevropa",
//   Afrika:"Afrika",
//   Shimoliy_Amerika:"Shimoliy Amerika",
//   Janubiy_Amerika:"Janubiy Amerika",
//   Avstraliya:"Avstraliya",
// }
// let {
//   Osiyo: { 
//     title,
//      countres:{
//       Uzbekiston,
//       Tojikiston,
//       Turkmaniston,
//       Qirgiziston,
//       Avgoniston,
//       Braziiya,
//       Argentina,
//     }
//   },
//   Yevropa,
//   Afrika,
//   Shimoliy_Amerika,
//   Janubiy_Amerika,
//   Avstraliya,
// } = qitalar;
// console.log(
//   title,
//   Uzbekiston,
//   Tojikiston,
//   Turkmaniston,
//   Qirgiziston,
//   Avgoniston,
//   Braziiya,
//   Argentina,
//   Yevropa,
//   Afrika,
//   Shimoliy_Amerika,
//   Janubiy_Amerika,
//   Avstraliya
// );