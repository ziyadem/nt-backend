//praktika1 Learn Lodash (2)
// function checkNumber(prs) {
//     let arr=[]
//     for (let i = 0; i < prs.length; i++) {
//         if (Number(prs[i])) {
//             arr.push(prs[i])
//         }
//     }
//     console.log(arr);
// }
// checkNumber([0,2,false,'',1, 3])



// praktika 2
// const arr=[1,2,3,[1,3,4,[1,[3,[1]]]]]
// let res=[]
// arr.forEach(e => {
//     if(e.length){
//         e.forEach(j => {
//             if(j.length){
//                 j.forEach(k => {
//                     if(k.length){
//                         k.forEach(l => {
//                             if(l.length){
//                                 l.forEach(m => {
//                                     if(m.length){
//                                        console.log('yoq'); 
//                                     }else{
//                                         res.push(m)
//                                     }
//                                 });
                                
//                             }else{
//                                 res.push(l)
//                             }
//                         });
                        
//                     }else{
//                         res.push(k)
//                     }
//                 });
                
//             }else{
//                 res.push(j)
//             }
//         });
        
//     }else{
//         res.push(e)
//     }

// });
// console.log(res);

//praktika3
//  const num=[0,0,1,1,1,2,2,3,3,4];
//  let arr=[]
//  num.forEach(e => {
//     if(!arr.includes(e)){
//         arr.push(e);
//         arr.push('_')
//     }       
//  });
//  console.log(arr.sort());