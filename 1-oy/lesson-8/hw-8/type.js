//1
// function unique(arr) {
//     let k=new Set(arr)
//     console.log(k);
// }
// unique(['sd','sd','dhidsu','men','men'])

//2
// function aclean(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] !==arr[j] && arr[i].length ==arr[j].length ){
//                 console.log(arr[i]);
//             }
//         }
//     }
// }
// aclean(['men','nem','lorem'])

//4
// function countAll(txt) {
//     let s=0
//     let k=0
//     for (let i = 0; i < txt.length; i++) {
//         if(Number(txt[i])){s++}
//         if(txt[i]==' '){k++}
//     }
//     console.log({
//         "letters":txt.length-s-k,
//         'digital':s
//     });
// }
// countAll('wxjhbio6721bs whjp')

//5
// let arr=[
//     {
//         name:'A',
//         country:{
//             name:"Uzb",
//             region:'toshkent'
//         }
//     },
//     {
//         name:'B',
//         country:{
//             name:"KZ",
//             region:'astana'
//         }
//     }
// ]
// let a = new Map(Object.entries(arr[0]));
// let b = new Map(Object.entries(arr[1]));
// console.log(a,b);

//6
// function converter(a,b) {
//     if(b==='array'){
//         console.log(a.values());
//     }if(b==='object'){console.log(a.keys());}
// }
    
// let map = new Map([["cucumber", 400], ["onion", 300], ["tomato", 200]]);
// converter(map,'array')
// converter(map, "object");

//7
// function converter(a,b) {
//     if(b==='array'){
//         console.log(a.values());
//     }if(b==='object'){console.log(a);}
// }
    
// let map = new Map([["mevalar", ['shaftoli','olma']], ["onion", 300], ["tomato", 'piyoz']]);
// converter(map,'array')
// converter(map, "object");

//8
// let arr=['olma','gilos','anor','anor','olma']
// let res=new Set(arr)
// let r=[]
// res.forEach(e=> {
//     r.push(e)
// });
// console.log(r);