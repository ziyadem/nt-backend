/*12 task
let arr = []
arr[0]

let count = 0


function arrCount(arr){
    if(typeof arr == 'string'){
        console.log(arr);
        return 

    }else {
        count += 1
        return arrCount(arr[0])
    }

}

arrCount([[[[[[[[[[[[[[[[[[['Hello']]]]]]]]]]]]]]]]]]])
*/


/* 6-task
function sumOfCubes(arr){
    let new_arr = []
    let sum = 0
    for(let v of arr){
        new_arr.push((v**3))

        sum += v ** 3

    }

    new_arr.push({
        add: sum
    })

    console.log(new_arr);

}

sumOfCubes([1, 2, 3])

*/

/* 15-task
function letterReplace(text, l, r){
   // console.log(text.replaceAll(l, r));

   let res = text.split('')
  let res2 =  res.map((val) => {
    if(val == l){
       return val = r 
    }else {
        return val
    }
   })

   console.log(res2.join(''));

}

letterReplace('hello world', 'l', 'k')

*/