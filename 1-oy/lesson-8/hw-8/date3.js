// 1
const date = new Date();
let yil = date.getFullYear();
let oy = date.getMonth();
let kun = date.getDate();
let voqt = date.getHours();
let minut = date.getMinutes();
let second = date.getSeconds();
let ms = date.getMilliseconds();
let body = document.querySelector("body");
console.log(body);
let h = document.createElement("h1");
// let h2 = document.createElement("h2");
let diV = document.createElement("div");
let diV1 = document.createElement("div");
let diV2 = document.createElement("div");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let btn5 = document.createElement("button");
let btn11 = document.createElement("button");
let btn21 = document.createElement("button");
let btn31 = document.createElement("button");
let btn41 = document.createElement("button");
let btn51 = document.createElement("button");
h.innerHTML = `${yil}-${oy < 10 ? "0" + `${oy}` : oy}-${
  kun < 10 ? "0" + `${kun}` : kun
}`;
btn1.setAttribute('type','button')
btn1.setAttribute('class','btn btn-primary')
btn1.textContent='pow'
btn2.setAttribute('type','button')
btn2.setAttribute("class", "btn btn-secondary");
btn2.textContent='sqrt'
btn3.setAttribute('type','button')
btn3.setAttribute("class", "btn btn-success");
btn3.textContent='abs'
btn4.setAttribute('type','button')
btn4.setAttribute("class", "btn btn-danger");
btn4.textContent='min'
btn5.setAttribute('type','button')
btn5.setAttribute("class", "btn btn-warning");
btn5.textContent='max'
btn11.setAttribute('type','button')
btn11.setAttribute('class','btn btn-primary')
btn11.textContent='pow'
btn21.setAttribute('type','button')
btn21.setAttribute("class", "btn btn-secondary");
btn21.textContent='sqrt'
btn31.setAttribute('type','button')
btn31.setAttribute("class", "btn btn-success");
btn31.textContent='abs'
btn41.setAttribute('type','button')
btn41.setAttribute("class", "btn btn-danger");
btn41.textContent='min'
btn51.setAttribute('type','button')
btn51.setAttribute("class", "btn btn-warning");
btn51.textContent='max'
diV1.append(btn1, btn2, btn3, btn4, btn5);
diV2.append(btn11, btn21, btn31, btn41, btn51);
diV1.setAttribute("class", "one");
diV2.setAttribute("class", "one");
diV.innerHTML = `${voqt < 10 ? "0" + `${voqt}` : voqt} : ${
  minut < 10 ? "0" + `${minut}` : minut
} : ${second < 10 ? "0" + `${second}` : second} : ${
  ms < 10 ? "0" + `${ms}` : ms
}`;
body.append(h,diV1, diV,diV2);

{/* <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button> */}
