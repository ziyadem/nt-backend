const EventEmitter = require("events")

const calculator = new EventEmitter()

/* Maths operators
calculator.on("add", (a, b) => console.log(`result: `, a + b))
calculator.on("minus", (a, b) => console.log(`result: `, a - b))
calculator.on("devide", (a, b) => console.log(`result: `, a / b))
calculator.on("multiply", (a, b) => console.log(`result: `, a * b))
calculator.emit('add', 3, 4)
calculator.emit('minus', 3, 4)
calculator.emit('devide', 3, 4)
calculator.emit('multiply', 3, 4)
*/


/*
calculator.once('once', () => console.log('Faqat bir marta ishlaydi!'))
calculator.emit("once")
*/


/* 
console.log(calculator.on === calculator.addListener);

calculator.addListener("add", (a, b) => {
    console.log(a + b);
    return a + b
})

calculator.emit("add", 4, 6)
calculator.removeListener("add", add)
calculator.emit("add", 3, 2)
*/





