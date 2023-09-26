//praktikaa
// class MyMap{
//     static map(a){
//         console.log(123);
//         console.log(a);
//     }
// }

// Array.prototype.myMap = MyMap.map();
// let ar=[123,2]
// ar.myMap((e) => {
//   console.log(e);
// });

// Array.prototype.mymap = function (callback) {
//   const resultArray = [];
//   for (let index = 0; index < this.length; index++) {
//     resultArray.push(callback(this[index], index, this));
//   }
//   return resultArray;
// };

// console.log(arr.mymap((e, index, arr) => e));
const arr = [1, 2, 3, 4, 56, 4];

class MyMap {
  constructor(array, a) {
    this.array = array;
    this.a = a;
  }

  Map(array, a) {
    array[array.length] = a;
    return array;
  }
}

const newMap = new MyMap();

console.log(newMap.Map(arr, 3));
