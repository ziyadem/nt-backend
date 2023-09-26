/*
   Map() -> Object
   Set() -> Array
   WeakMap()
   WeakSet()


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
------------------------- About Map -------------------------
      let map = new Map();
      map.set(key, value) -> mapga key/value orqali qiymat kiritish.
      map.get(key)        -> key orqali mapdan valueni olish.
      map.has(key)        -> agar mapda key bo`lsa true aks holda false qiymat qaytaradi.
      map.delete(key)     -> key orqali mapdagi qiymatni o`chirish.
      map.clear()         -> mapni butkul tozalab yuboradi.
      map.size            -> mapdagi elementlar soni.


      Object  vs Map()
      1. Key satrlarga aylantirilmaydi.

*/

/*  
    Obyectni Mapga va Mapni Obyectga o`tkazish
        let obj = {
            name: "John",
            age: 30
            };
        let map = new Map(Object.entries(obj));
        let res = Object.fromEntries(map.entries())

*/

/* 
  Example: 
        let map = new Map();
        map.set(true, 12);
        map[true] = 'str'  -> Bu holatda obyect sifatida ishlaydi. Talabga javob bermaydi.
        console.log(map);

*/

/*
   Example -> Obyectni ham key sifatida berish mumkin.
        let map = new Map();
        let john = { name: "John" };
        map.set(john, '12345')
        console.log(map);
*/

/* 
   Example: -> mapni chaining holatda ishlatish
        let map = new Map();
        let res = map.set('1', 'str1').set(1, 'num1').set(true, 'bool1').get(1)
        console.log(res);

*/

/*
    Map ustida iteratsiya -> 3 ta for loop metodlari bor.
      - map.keys()
      - map.values()
      - map.entries()

          Example: 
              let recipeMap = new Map([
                    ['cucumber', 500],
                    ['tomatoes', 350],
                    ['onion',    50]
                    ]);

                    // iterate over keys (vegetables)
                    for (let vegetable of recipeMap.keys()) {
                    alert(vegetable); // cucumber, tomatoes, onion
                    }

                    // iterate over values (amounts)
                    for (let amount of recipeMap.values()) {
                    alert(amount); // 500, 350, 50
                    }

                    // iterate over [key, value] entries
                    for (let entry of recipeMap) { // the same as of recipeMap.entries()
                    alert(entry); // cucumber,500 (and so on)
                    }


*/

/*
     forEach() -> map uchun
        map.forEach((value, key, map)=>{
            console.log(value, key, map);
        })
*/


