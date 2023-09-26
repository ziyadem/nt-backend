/* call vs apply vs bind


function getName(n, a, b) {
    console.log(a + b);
    console.log(`My name is ${ n ? n : this.name} `);
    return
}

let user = {
    name: 'Toshmat',
    age: 23,
   
}


// getName.call(user, 'Anvar', 6, 5)
// getName.apply(user, ['Sarvar', 3, 6])
getName.bind(user, 'Anvar', 3, 5)()


*/


//recursive function

// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// let res = factorial(5)

// console.log(res);


// let a = 12

// function add(){
//     let a = 34
//     return a
// }




//   function f2() {
//     f1();
//     console.log('Hi by f2!');
//   }


    


//   function f3() {
    
//     console.log('Hi by f3!');
//   }
    


// f3()

// f2()


// var  f1 = () => {
//     console.log('Hi by f1!');
//   }

