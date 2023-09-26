let user = {
    true: 1,
    name: {
        true: 2
    },
    f: () => {
        console.log('function...');
    }
}

let bool = true;


// console.log(user.name?.[bool])
// console.log(user.name?.bool);



// 12 -task

function checkToValues(n, bool){
    let obj = {
        value: null
    }
    if(n % 2 == 0 && bool == true){
        Object.defineProperty(obj, 'value', {
            value: true
        })
    } else {
        Object.defineProperty(obj, 'value', {
            value: false
        })

    }

    let res =  Object.getOwnPropertyDescriptor(obj, 'value')

    console.log(res);

}

checkToValues(14, false)