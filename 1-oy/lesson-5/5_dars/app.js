

// let users = [
//     {
//         id: 1,
//         name: 'Anvar',
//         email: 'anvar@gmail.com'
//     },
//     {
//         id: 2,
//         name: 'Anvar',
//         email: 'anvar1997@gmail.com'
//     },
//     {
//         id: 3,
//         name: 'Sarvar',
//         email: 'sarvar@gmail.com'
//     }
// ]


// let filteredUsers = users.filter( user=>user.name === 'Anvar')

// console.log(filteredUsers);


// let letters = ['a', 'f', 's', 'b', 'j', 'z']

// let nums = [2, 3, 1, 11, 1111]


// let result = letters.sort()
// let result2 = nums.sort(function(a, b){
//     return  a - b
// })

// console.log(result2);


// const fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//              let res = fruits.copyWithin(3, 1, 3)

//              console.log(res);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.keys();

// for(let r of res){
//     console.log(r);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.fill("Kiwi", 1, 3);

// console.log(res);

// let text = 'Nodejs';
// let res = Array.from(text)
// console.log(res);







/*task - 6

function changeToArray(obj, num){
   let values = Object.values(obj)
   let checked = values.find((val)=>val == num)
   checked && values.push(true)
   !checked && values.push(false)
   return values
}
let res = changeToArray({ a: 12, b: 34 }, 123)
console.log(res);
*/


// function addToArray(num){
//     let arr = []
//     for(let i = 1; i <=num; i++ ){
//         arr.push(i)
//     }

//    let uzunlik = arr.length
//    let bolinma = uzunlik / 3
//    let res = uzunlik % 3

//    let arr2 = []

//    for(let num = 0; num <= Math.floor(bolinma); num++){
//      let kesilgan = arr.slice(num * 3, 3)
//      arr2.push(kesilgan)
//    }

//    console.log(arr2);
// }




// function getLength(arr){
//    return arr.flat(Infinity)
// }

// let res = getLength([2, [4, [6, [9]]]])

// console.log(res);



// function numInStr(arr) {
//     let newArr = []
//     arr.forEach((item)=>{
//         for(let letter of item){
//             if( +letter >= 0){
//                 newArr.push(item)
//             }
//         }
//     })

//     return newArr

// }

// let res = numInStr(['2dd', 'ghh', 'sdhcbsfvsgd5', 'sfde4sdfesrf'])

// console.log(res);



// function getDepth(val) {
//     if(Array.isArray(val)) {
//         return 1 + Math.max(0, ...val.map(getDepth))
//     }else {
//         return 0
//     }
// }

// let result = getDepth([[[[[[[[]]]]]]]])

// console.log(result);



let n = [1, 2, 3, 4, 6, 11]


// n.forEach((item, idx, arr)=> item + 2)

// let res = n.map(item => item + 2)


// console.log(res);

// const fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = fruits.copyWithin(2, 0, 3)

// console.log(res);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for(let x of f){
//     console.log(x);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//             let res = fruits.keys();
//             for(let r of res){
//                 console.log(r);
//             }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//        let res = fruits.fill("Kiwi", 1, 3);

//        console.log(res);


// let text = 'Nodejs';
//         let res = Array.from(text)
//         console.log(res);

        // let res2 =text.from()

        // console.log(res2);


        let user = {
            name: 'A',
            age: 12
        }



        let user2 = user

        user.name = 'Anvar'

        user = null

        console.log(user2);
        console.log(user);




