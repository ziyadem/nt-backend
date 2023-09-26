/*
  Map() vs WeakMap()
       1. WeakMap() -> key sifatida faqat obyect qabul qiladi.
       2. WeakMap() -> keyga obyect ishlatadigan bo`lsak, obyectnu null ga tenglashtirsak, weakMap() dagi qiymat ham o`chib ketadi. 
       3. WeakMap() -> ushbu metodlar ishlamaydi. keys(), vlues(), entries()
  Set() vs WeakSet()



  Example: 
    For Map()
        let john = { name: "John" };
        let map = new Map();
        map.set(john, "...");
        john = null; 
        console.log(map);

    For WeakMap()
        let john = { name: "John" };
        let weakMap = new WeakMap();
        weakMap.set(john, "...");
        john = null;
        console.log(weakMap.get(john));

*/

/*  

  WeakMap metodlari
     - weakMap.set(key, value)
     - weakMap.get(key)
     - weakMap.delete(key)
     - weakMap.has(key)

*/

/* 
   WeakMapda ushbu metodlar ishlamaydi.
     - weakMap.keys()
     - weakMap.values()
     - weakMap.entries()


*/