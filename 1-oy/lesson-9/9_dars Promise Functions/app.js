

// let x = 15

// console.log(x.push());


// eval(`
// let a = 12, b = 23
//       console.log(a + b)
// `)

// console.log(decodeURI("https://www.educative.io/shoteditor"))
// console.log(decodeURI("%sdfk"));




/* Promises

function add(a, b){
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        for(let i = 0; i < 100000; i++){}

        resolve(a + b)
      }, 3000)

    }).then(res => console.log(res, 'plus...'))

}

function minus(a, b){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        for(let i = 0; i < 1000; i++){}

        resolve(a - b)
     }, 1000)

    }).then(res => console.log(res, 'minus...'))
      .catch(e => console.log(e))

}

 async function  mathActions(){
   try {
    await add(4, 2);
    await minus(6, 2)
    
   } catch (error) {
    console.log(error);
    
   }
}

mathActions()

*/


function add(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d
            }

        }
    }

}

// let res = add(6)(5)(4)(3)()()()()()()()

// console.log(res);


// let arr = [1, 2, 3, 4];
//             let pushToArray = (arr) => {
//                 return arr.concat(5);
//             }
//             let res = pushToArray(arr);
//             console.log(arr, res);

// function basicFunction(x) {
//     return function (y) {
//            return x + y;
//     };
// }
// const second = basicFunction(5);
// console.log(second(2));
// console.log(second(2));
// console.log(second(2));
// console.log(second(2));
// console.log(second(2));
// console.log(second(2));
// console.log(second(2));
// console.log(second(2));


//JavaScript Immediately-invoked Function Expressions (IIFE)



// (function(){
//     console.log('working....');
// })()


// console.log(
//     isFinite('123')
// );

// console.log(
//     Number.isFinite(123)
// );

// let a = 23
// let res = a.toString(2)
// console.log(
//     res
// );

// console.log(parseInt(res, 10));


let controller = new AbortController()
setTimeout(() => controller.abort(), 100);
fetch('https://jsonplaceholder.typicode.com/comments', { signal: controller.signal }).then(res => res.json())
.then(users => {
    console.log(users);
})