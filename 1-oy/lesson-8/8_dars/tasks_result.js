// const numbers = [10, 4, 2];

// function myFunc(total, num) {
//     console.log(total, 'total...');
//     console.log(num, 'num...');
//   return total + num;
// }


// let res = numbers.reduce(myFunc)

// console.log(res, 'result...');

/*
Array.prototype.myReduce = function(callback, value){
    let sum = value || this[0];
    let i = value ? 0 : 1;
    for(; i < this.length; i++){
        sum = callback(sum, this[i]);
    }
    return sum;
}

let arr = [3, 5, 2];
let res = arr.myReduce((acc, el)=>acc - el, 15 );

console.log(res);
*/