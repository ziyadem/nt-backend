/*
   ----------------------  About Date class -----------------------
   Example: 
         new Date(year,month,day,hours,minutes,seconds,ms)
         const d = new Date();
         const d2 = new Date("2022-03-25");

    
   d.toDateString() -> sanani o'qilishi mumkin bo'lgan formatga o'zgartiradi.
   d.toUTCString()  -> UTC standarti yordamida sanani satrga aylantiradi.
   d.toISOString()  -> ISO standarti yordamida sanani satrga aylantiradi.


   Javascriptda oylar 0 dan 11 gacha sanaladi.
          - January = 0.
          - December = 11.

    Date kiritish format
        - const d = new Date("2015-03-25");
        - const d2 = new Date("03/25/2015");
        - const d3 = new Date("Mar 25 2015");

    Date.parse() -> sanani millisekundlarga aylantiradi.Date.parse() sana va 1970 yil 1 yanvar o'rtasidagi millisekundlar sonini qaytaradi:
       
            Example: Date ni millisekundga va millisekundni Date aylantirish.
                    let msec = Date.parse("March 21, 2012");
                    const d = new Date(msec);
        

*/

/*
                 JavaScript Localniy sanani lish metodlari
    - date.getFullYear() -> Joriy yilni qaytaradi.
    - date.getMonth()    -> Joriy oyni qaytaradi.(0 - 11)
    - date.getDate()     -> Joriy kunni qaytaradi.(1 - 31)
    - date.getDay()      -> Hafta kunini qaytaradi. (0 - 6)
    - date.getHours()    -> Soatni qaytaradi.(0 - 23)
    - date.getMinutes()    -> Minutni qaytaradi.(0 - 59)
    - date.getSeconds()    -> Secondni qaytaradi.(0 - 59)
    - date.getMilliseconds()    -> Millisecondni qaytaradi.(0 - 999)
    - date.getTime()   -> 1970 yil 1 yanvardan millisekundlarni qaytaradi.



    - date.getTimezoneOffset() -> usuli mahalliy vaqt va UTC vaqti oʻrtasidagi farqni (daqiqalarda) qaytaradi:

*/