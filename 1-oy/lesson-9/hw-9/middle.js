let date=new Date();

setInterval(() => {
    let s=''
    let date = new Date();
    s += `${
      date.getHours() < 10 ? "0" + `${date.getHours()}` : date.getHours()
    }-${
      date.getMinutes() < 10 ? "0" + `${date.getMinutes()}` : date.getMinutes()
    }-${
      date.getSeconds() < 10 ? "0" + `${date.getSeconds()}` : date.getSeconds()
    }`;
    s2 = `${
      date.getDate() < 10 ? "0" + `${date.getDate()}` : date.getDate()
    } : ${
      date.getMonth() < 10 ? "0" + `${date.getMonth()}` : date.getMonth()
    } : ${date.getFullYear()}`;
    let body=document.querySelector('body') 
     let h1 = document.createElement("h1");
     let h2 = document.createElement("h2");
     h1.textContent=`${s}`
     h2.textContent = `${s2}`;
     body.innerHTML=' '
     body.append(h2,h1)
}, 1000);
