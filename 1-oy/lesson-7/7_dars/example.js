/*
function countDown(number) {
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4)  //recursive funcsiya bilan
4
3
2
1


*/
/*
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

let res = factorial(3)

console.log(res);
*/

/*


pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16

  recursive funksiyasiz
         function pow(x, n) {
            let result = 1;
            // multiply result by x n times in the loop
            for (let i = 0; i < n; i++) {
                result *= x;
            }
            return result;
            }
            alert( pow(2, 3) );

  recursive funksiya bilan
         function pow(x, n) {
            return (n == 1) ? x : (x * pow(x, n - 1));
            }


*/

/*
call, apply, bind

function getData() {
    console.log(`My name is ${this.name}`);
    return 

}
let user = {
    name: 'Anvar'
}

getData.apply(user)
getData.call(user)
getData.bind(user)()

*/

const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
  const name = "Sarah";
  const age = 22;
  const city='amerika';

  return `${name} is ${age} and lives in ${city}`;
}

console.log(getPersonInfo());