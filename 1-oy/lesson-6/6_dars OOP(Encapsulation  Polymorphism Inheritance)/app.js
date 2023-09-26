// Array
// Object
// Number
// String
// Math
// Date



// let user = {
//     name: 'A',
//     surname: 'B',
//     age: 12
// }

// let user2 = {
//     name: 'A2',
//     surname: 'B2',
//     age: 12
// }

// function Person(name, surname, age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age

// }

// let user = new Person('Toshmat', 'Eshmatov', 12);
// let user2 = new Person('Shermat', 'Eshmatov', 23)


// Person.prototype.show = function(){
//     console.log('Show working!!!');
//     return
// }














// let user3 = new Person2('Toshmat', 'Eshmatov', 12)

// Person2.createUser()

// console.log(user);

// Math.max()


// let str = 'Js'


class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    static createUser(obj){
        // create user
        return
    }

    showData(){
        console.log(`Mening ismim ${this.name}`);
        console.log(`Mening familyam ${this.surname}`);
        console.log(`Mening yoshim ${this.age}`);
        return
    }
}

// let user = new Person('Toshmat', 'Eshmatov', 12)
// let user2 = new Person('Toshmat2', 'Eshmatov2', 34)


// user.showData()
// user2.showData()

class Student extends Person {
    #n = 12
    _b = 34
    constructor(name, surname, age, stependiya){
        super(name, surname, age)
        this.stependiya = stependiya
    }

    showNumber(){
        return `${this.#n}`
    }

}

// let student = new Student('Toshmat', 'Eshmatov', 12, '555000')
// student.showData()
// console.log(student);

// student._b

// let res = student.showNumber()

// console.log(res);


// class B {
//     static b = 123
// }
// class A extends Person {
//     constructor(name, surname, age){
//         super(name, surname, age)

//     }
// }


// let obj = new A('A', 'B', 12)

// obj.showData()
// console.log(A.b);



class MyMath {
    static max(arr){
        console.log(Math.max(...arr));
        return 
    }
}

MyMath.max([2, 3, 6])
console.log(Math.PI(3)*2);














class Teachers extends Person {
    constructor(name, surname, age, salary){
        super(name, surname, age)
        this.salary = salary
    }

}







// let teacher = new Teachers('Toshmat', 'Eshmatov', 12, '12000000')
// teacher.showData()
// console.log(teacher);






