/*
   Plan
     - Promises
     - Error types
     - function types
     - AbortController

*/
/*
 Error types
 https://www.scaler.com/topics/types-of-errors-in-javascript/

*/
/*

   Plan:
     - First-Class Function
     - First Order function
     - Higher order function
     - Unary function
     - Currying function
     - Pure function
     - Closures
     - Rekursive function
     - Scope types

*/

/*
   First-Class Function -> funksiyalar istalgan boshqa o‘zgaruvchiga tayinlanishi yoki argument sifatida berilishi yoki boshqa funksiya orqali qaytarilishi mumkin
       Example: 
            onclick(function(){})
            document.addEventListener('click', function(){})

*/


/*
    First Order function -> boshqa funksiyani argument sifatida qabul qilmaydigan funksiya
       Example: 
           const fOrder = () => console.log('first order function);
      
*/

/*
   Higher order function -> boshqa funksiyani argument sifatida qabul qiladigan, 
                            funksiyani qaytish qiymati kiruvchi argument funksiyaning qaytish qiymatiga bog`liqligi.
                    Example: 
                         map()
                         forEach()
                         ....
*/


/*
     Unary function -> faqat argument sifatida bitta qiymatni qabul qiladigan funksiyaga aytiladi.
           Example: 
               const UnaryFunc = (a) => console.log(a)
*/


/*
     Currying function -> ichma ich funksiyalarni ishlatish va natijalarini qaytarish funksiya.
          Example: 

              function add(a){
                    return (b)=>{
                        return (c)=>{
                            return (d)=>{
                                return (e) => {
                                    return a + b + c + d + e;
                                }
                            }
                        }
                    }
                }
                add(1)(2)(3)(4)(5)
*/

/*
    Pure function -> tashqi o`zgaruvchini qiymatini o`zgartirmasdan yanggi qiymat qaytaruvchi funksiyaga aytiladi.
        Example: 
           let arr = [1, 2, 3, 4];
            let pushToArray = (arr) => {
                return arr.concat(5);
            }
            let res = pushToArray(arr);
            console.log(arr, res);

            push()   -> impure   concat() -> pure
            splice() -> impure   slice()  -> pure
*/


/*
  Closures -> funksiya va ushbu funksiyani e`lon qilingan leksik muhit
         Example: 
            function basicFunction(x) {
                return function (y) {
                return x + y;
                };
            }
            const second = basicFunction(5);
            console.log(second(2));

*/

/*
    1. Destruction -> obyect o`zgaruvchisini qayta nomlash.
    2.JavaScript Immediately-invoked Function Expressions (IIFE)
    3. module.exports
    4. require()
    6. isNaN va isFinite
    7. parseFloat va parseInt
    8. Global
          - setTimeout()
          - clearTimeout()

          - setInterval()
          - clearInterval()

*/

/*
  
  isNaN()        -> qiymatni raqamga aylantiradi. Agar NaN bo`lsa true qiymat qaytaradi. Aks holda false.
  Number.isNaN() -> argumentni o'zgartirmaydi; argument Raqam va NaN bo'lsa, u haqiqatni qaytaradi.

  isFinite()     -> globalniy ishlaydi. Qiymatni numberga aylantiradi, agar chekli bo`lsa true qaytaradi. Aks holda false.
               (false, true, '' -> true), (NaN, Infinity,  undefined, 'test' -> false);

  Number.isFinite(123) -> faqat number qiymatlarda ishlaydi.


  parseInt() -> Qiymatni tahlil qiladi.
             - Number(), + -> bir xil vazifani bajaradi.
             - 2 ikkilikdan 10 likga o`tkazadi. (number.toString(2) -> ikkilikga aylantirish)

  parseFloat() -> qiymatni yaxlitlamasdan qaytaradi.

*/

/*
  AbortController 
        let controller = new AbortController()
        setTimeout(() => controller.abort(), 100);
        fetch('https://jsonplaceholder.typicode.com/comments', { signal: controller.signal }).then(res => res.json())
        .then(users => {
            console.log(users);
        })
*/




