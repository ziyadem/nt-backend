/*
--------------------------------------------------------------------------
Array.prototype.myReduce = function(callback, value){
    let sum = value || this[0];
    let i = value ? 0 : 1;
    for(; i < this.length; i++){
        sum = callback(sum, this[i]);
    }
    return sum;
}

let arr = [3, 5, 2];
let res = arr.myReduce((acc, el)=>acc + el, 10);

console.log(res);
*/

/*
  Data types
       Primitive data type
       Constractive data type
  spread vs rest operators
  method chaining
  Math


*/

/*
        Data type
    1 Primitive data type 
               string
               number
               boolean
               undefined
               null
               symbol
               bigint
    
    2. Constractive data type
              Object
              Array
              Map()
              Set()
              WeakMap()
              WeakSet()

*/

/*
Localniy symbollar bir biriga teng emas
    let a = Symbol('id');
    let b = Symbol('id');
    a.description -> Localniyda symbol qiymatini olish uchun ishlatiladi. Globalniyda ham ishlaydi


Globalniy symbollar bir biriga teng
    let g = Symbol.for('id');
    let g2 = Symbol.for('id');
    console.log(g == g2); false
    Symbol.keyFor(g) -> ushbu metod faqat globalniy symbolda ishlaydi.
    console.log(g.description);

*/

/*
    console.log(23.6 | 0) -> sonni yaxlitlash
*/

/*
     Spread operator
             array
             object
    ( in ) operator for object
    Spread vs rest operators

*/

/*
  Chaining
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
  
  ladder.up().up().down().showStep().down().showStep();
*/

/*
  JavaScript Matematik xususiyatlari sifatida foydalanish mumkin bo'lgan 8 ta matematik konstantalarni taqdim etadi:
     - Math.E        -> Eyler raqamini qaytaradi
     - Math.PI       -> PIni qaytaradi
     - Math.SQRT2    -> 2 ning kvadrat ildizini qaytaradi
     - Math.SQRT1_2  -> 1/2 kvadrat ildizini qaytaradi
     - Math.LN2      -> 2 ning natural logarifmini qaytaradi
     - Math.LN10     -> 10 ning natural logarifmini qaytaradi
     - Math.LOG2E    -> E ning 2 ta logarifmini qaytaradi
     - Math.LOG10E   -> E ning 10 ta logarifmini qaytaradi
*/

/*
    Math metodlari -> Sondan butun songa
         Raqamni butun songa yaxlitlashning 4 ta umumiy usuli mavjud:
    
    - Math.round(x)	->(3.4 -> 3, 3.5 -> 4) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
    - Math.ceil(x)	-> (3.4 -> 4, 3.9 -> 4) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
    - Math.floor(x)	-> (4.1 -> 4, 4.9 -> 4, -4.1 -> -5) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
    - Math.trunc(x) -> (4.1 -> 4, 4.9 -> 4, -4.1 -> -4) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi


*/

/*
    - Math.sign(x)   -> x musbat bo`lsa 1 aks holda -1 qaytadi. 0 ga teng bo`lsa 0 qaytadi.
    - Math.pow(x, y) -> x ni y marta bir biriga ko`paytiradi.
    - Math.sqrt(x)   -> x = 8 = 64 x ning qiymatini kvadratga oshirib beradi.
    - Math.abs(x)    -> x = 4.2. x qiymatini modulda chiqaradi.
    
    
    - Math.min(0, 150, 30, 20, -8, -200) -> min qiymatni topish.
    - Math.max(0, 150, 30, 20, -8, -200) -> max qiymatni topish.

    - Math.random() -> 0 va 1 oralig`idagi sonni qaytaradi.

*/
