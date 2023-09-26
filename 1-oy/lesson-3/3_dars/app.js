/*
  
    3-dars tasks
    8-task
        function numberSum(nums){
            let s = 0;
            for(let n = 0; n <=nums; n++){
                if(n % 3 === 0 || n % 5 === 0 || n % 7 === 0){
                    s += n
                }
            }
           let sim = String.fromCharCode(s)
            console.log(sim);
            return s
        }
        let res = numberSum(10)
        console.log(
            'Anvar'.charCodeAt(2)
        );

    15-task
        let text = 'sfvdbjsfhvdhbfgsvcgzvsdcsMENhdhsdvfsfvsbdjhDATURCHIMANdfvdf'
        let res = text.slice(25, 28)
        let isBool = text.includes('MEN')
        console.log(isBool);

*/

/*
  Data type -> Object

  // let arr = [1, 2, 3, 4]

// delete arr[2]

// console.log(arr.length);

*/




// let user2 = user

// user.n = 100
// console.log(user);
// console.log(user2);


// Object.prototype.show_obj = function(){
//     console.log(JSON.stringify(this));
// }

// user.show_obj()


// let n = 'text';


// String.prototype.showText = function(){
//     console.log(this);
// }

// n.showText()



// console.log('username' in user);



// for(let u in user){
//     console.log(user[u]);
// }

// for(let u of user){
//     console.log(user[u]);
// }


// let user = {
//     n: 1,
//     name: 'A',
//     bool: true,
//     func: function (){
//         console.log(this.bool)
//     },
//     'js ts': 'javascript_typescript'
// }


// let user2 = {...user}

// user.n = 100

// console.log(user);
// console.log(user2);

// let user2 = Object.assign(user, {a: 'b'}, {c: 'a'})
// user.n = 10000
// console.log(user);
// console.log(user2);


// let keys = Object.keys(user)
// let values = Object.values(user)
// let entries = Object.entries(user)
// let fromEnt = Object.fromEntries(entries)


// console.log(keys);
// console.log(values);
// console.log(entries[0]);
// console.log(fromEnt);

//let frez = Object.freeze(user)

// delete user.name

// console.log(user);


// let res = Object.defineProperty(user, 'name', {
//     value: 'Anvar',
//     enumerable: false,
//     writable: true,
//     configurable: false
// }) 

// user.name = 'AAAA'

// delete user.name

// console.log(user);



// let user = {
//     name: 'A',
//     age: 12
// }

// Object.defineProperty(user, 'name', {
//     value: 'B',
//     writable: false
// })

// user.name = 'Anvar'

// let res = Object.getOwnPropertyDescriptor(user, 'name')

// let result = Object.preventExtensions(user);

// user.surname = 'Suyunov';
// console.log(result);



let str2 = ' Typescript'


// let result = str.concat(str2)

// console.log(str);
// console.log(result);

//let n = '63'


// let res = n.padStart(5, '1')
//let res = n.padEnd(5, '1')


// let str = "Javascript "

// console.log(str[1]);


// function numbersSum(n){
//     let s = 0
//     for(let i=0; i < n; i++){
//         if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
//             s += i
//         }
//     }

//     let res = String.fromCharCode(s)

//     let res2 = String.fromCodePoint(s)

//     console.log(res);
//     console.log(res2);

// }


// numbersSum(100)

let a = 12
let b = 'asd'

 b[0] = 'b'

//console.log(b[0]);

//object -> array




let countrs = {
    UZ: {
        title: 'Uzbekistan',
        capital: 'Tashkent'
    },
    KZ: {
        title: 'Kazakstan',
        capital: 'Nur Sulton'
    }
}


//destruction
// let { UZ: { title: uz_t, capital: uz_c }, KZ: {title:kz_t, capital: kz_c} } = countrs

// console.log(countrs.UZ.title);
// console.log(countrs.KZ.title);
// console.log(kz_t);
// console.log(uz_t);

// let arr = [1, 2, 3, 4]

// delete arr[0]



// console.log(user);
// console.log(arr.length);



let obj = {
    true: 1,
    'true': 2,
    [true]: 3
}

// console.log(obj.true);
// console.log(obj[true]);

// let obj2 = obj

// obj.true = '12'



//1-> Object.assign()
// for
// spread operator


// let obj2 = Object.assign({}, obj, {a: 'a'}, {b: 'b'})

// obj.true = '12'

// console.log(obj);
// console.log(obj2);


//2 - usul
// let obj2 = {}
// obj.true = '12'

// for(let key in obj){
//     obj2[key] = obj[key]
// }


// console.log(obj2);


// 3 usul


// let obj2 = { ...obj }
// obj.true = '12'

// console.log(obj2);


// let user = {
//     name: 'A',
//     age: 12
// }

// Object.seal(user)
// user.name = 'B'
// delete user.name
// console.log(user);

// Object.freeze(user)

// user.name = 'Anvar'

// console.log(user);




// Object.defineProperty(user, 'name', {
//     value: 'Eshmat',
//     enumerable: true,
//     writable: true,
//     configurable: false
// })

// user.name = 'A'

// delete user.name

// for(let k in user){
//     console.log(user[k]);
// }


let user = {
    name: 'A',
    age: 12
}
// Object.defineProperties(user, {
//     name: {
//         value: 'B',
//         writable: false,
//         configurable: false,
//         enumerable: false
//     },
//     age: {
//         value: 23,
//         writable: false
//     }
// })


// let res = Object.getOwnPropertyDescriptors(user)


// Object.preventExtensions(user)
// user.surname = 'Toshmatov'

// console.log(user);

let res = Object.entries(user)
let res2 = Object.fromEntries(res)
//console.log(res2);


let keys = Object.keys(user)
let vals = Object.values(user)

console.log(keys);
console.log(vals);

