/*
let a = Symbol('id');
let b = Symbol('id');


//console.log(a.description);
// console.log(b);
// console.log(a === b);

let g = Symbol.for('id');
let g2 = Symbol.for('id');

// console.log(g);
// console.log(g2);
// console.log(g === g2);


console.log(
Symbol.keyFor(g)

);

console.log(g.description);

*/


// console.log(23.66 | 0)

/*

function add(...rest){
    console.log(rest);

}

add(2, 3, 4, 5, 6, 8, 22, 45, 67, [], [], [], )

*/

/*
let user = {
    name: 'A',
    age: 23
}

console.log('surname' in user);

*/
/*

let incrementOrDecrement = {
    step: 0,
    increment() {
      this.step++;
      return this;
    },
    decrement() {
      this.step--;
      return this;
    },
    showStep() {
      console.log( this.step );
      return this;
    }
  };
  
 incrementOrDecrement.step = 1;

 incrementOrDecrement.increment().increment().increment().showStep().decrement().decrement().showStep()

//  let str = 'Js'

//  str.toUpperCase().toLowerCase().length.toUpperCase()

*/



// Date

//const d = new Date();

// console.log(d.toDateString());
// console.log(d.toISOString());
// console.log(d.toUTCString());
// console.log(d.getTime());

// Map  Set WeakMap  WeakSet

/*
let user = {
    name: 'A',
    true: 1,
    'true': 2,
    [true] : 3
}

user['surname'] = 'D'

// console.log(user);

// let map = new Map([['name', 'A'], [true, 1], ['true', 2], [[true], 3], [() =>{}, 'function']])
let map = new Map(Object.entries(user))

console.log(map.delete('name'));
console.log(map.size);
console.log(map.has('name'));
console.log(map.clear());

console.log(map, 'clera......');



// map.forEach((value, key, map)=>{
//     console.log(value, key, map);
// })

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// console.log(map.get('name'));

// map.set('surname', 'B')
// console.log(map);

// map['age'] = 23

// console.log(map.get('age'));

// user = Object.fromEntries(map)

// console.log(user);

*/


/*SET

let arr = [3, 4, 6, 11, 2, '4', 6, 6, '4']

console.log(arr);

let set = new Set(arr)

set.add('4')


// console.log(set.has('4'));

// for (let value of set) console.log(value)

console.log(set.keys());
console.log(set.values());
console.log(set.entries());

*/

/*
let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "value");

console.log(weakMap);
john = null;
console.log(weakMap.get(john));

*/



/*

let weakSet = new WeakSet()


weakSet.add({})

console.log(weakSet);

*/


let a = 129999999
console.log(a.toString(16));