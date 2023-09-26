

let js = 'Javascript'

js[0] = 'T'

//console.log(js);

let n = [1, 2, 3, 4, 8]

n[0] = 23

//console.log(n);



let arr = new Array(1, 2, 3, 5, 6)

// let arr2 = [7, 8, 10, 23]

// let res = [...arr, ...arr2]

//  let [, , , , g] =  res

//  console.log(g);

// console.log(arr);

// res[2] = 'js'
// console.log(res);

// delete arr[0]

// console.log(arr);



// arr.at(-1) 

// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// console.log(null == null);
// console.log( typeof null);
// console.log(  null == {});


// let matrix = [
//     [[6, 7], 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//     ];
// console.log(matrix[1][1]);


// let fruits = ['apply', 'cherry', 'banane', 'pear']


// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i], i);
// }

// console.log('for in --------------------------------------------------');

// for(let f in fruits){
//     console.log(fruits[f], f);
// }

// console.log('------------------------------------------------------');
// for(let v of fruits){
//     console.log(fruits[v], v);
// }



let fruits = ['apply', 'cherry', 'banane', 'pear']


// fruits.push('sdcsd')

fruits.splice(fruits.length-1, 1)

fruits.splice(fruits.length, 0, 'text')

//console.log(fruits);

let res = fruits.slice(-1)

//console.log(fruits);
// console.log(res);


fruits.push('text')


Array.prototype.myPush = function (txt){
    return this[this.length] = txt
}

fruits.myPush('olma')
fruits.myPush('olma')
fruits.myPush('olma')
fruits.myPush('olma')
fruits.myPush('olma')
fruits.myPush('olma')
fruits.myPush('olma')
fruits.myPush('olma')

console.log(fruits);



