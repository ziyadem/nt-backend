// 1
const date = new Date();    
let yil=date.getFullYear() 
let oy= date.getMonth()    
let kun=date.getDate()  
let voqt=date.getHours()
let minut=date.getMinutes()
let second=date.getSeconds()
let ms=date.getMilliseconds()
let body=document.querySelector('body')
console.log(body);
let h=document.createElement('h1')
// let h2 = document.createElement("h2");
let diV = document.createElement("div");
h.innerHTML = `${yil}-${oy < 10 ? "0" + `${oy}` : oy}-${
  kun < 10 ? "0" + `${kun}` : kun
}`;
diV.innerHTML = `${voqt < 10 ? "0" + `${voqt}` : voqt} : ${
  minut < 10 ? "0" + `${minut}` : minut
} : ${second < 10 ? "0" + `${second}` : second} : ${
  ms < 10 ? "0" + `${ms}` : ms
}`;
body.append(h,diV)


