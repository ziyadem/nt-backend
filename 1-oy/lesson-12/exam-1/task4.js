let txt=document.querySelector('.lorem').textContent
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let divH1 = document.querySelector(".result-one");
let divres2 = document.querySelector(".result-two");
console.log(btn1,btn2);
let res=''
btn1.addEventListener('click',()=>{
    divH1.innerHTML=' '
    res=' '
    let arr=txt.split(' ')
    arr.forEach(e => {
        if(e.toLowerCase()=='men'){res+=e+' '}else if(e.toLowerCase()=='javascript'){res+=e.toLowerCase()+' '}else if(e.toLowerCase()=='dasturchiman'){res+=e.toLowerCase()}
    });
    let h1=document.createElement('h1')
    h1.textContent=res;
    divH1.appendChild(h1);
})
btn2.addEventListener('click',()=>{
    divres2.innerHTML=' '
    let h3 = document.createElement("h3");
    h3.textContent ='Upper:' + " "+ res.toUpperCase();
    let lower = document.createElement("h3");
    lower.textContent ='Lower:' + " "+ res.toLowerCase();
    let strLength = document.createElement("h3");
    strLength.textContent = "str_length:"+" " + res.length;
    let text=[]
    for (let i = 0; i < res.length; i++) {
        if(!text.includes(res[i])){text.push(res[i])}
    }
    let letter_count=document.createElement('h3')
    let letC=''
    for (let i = 0; i < text.length; i++) {
        let s=0
        for (let j = 0; j < res.length; j++) {
            if(text[i]==res[j]){s+=1}
        }
        letC+=text[i]+':'+s+" ,"
    }
    letter_count.textContent='Letter_Count:'+ " "+ letC
    let start = document.createElement('h3');
    let end = document.createElement('h3');
    start.textContent ="Start_there_letter:"+ res[0] + res[1] + res[2];
    end.textContent ="End_there_letter:"+ res[res.length-3] + res[res.length-2] + res[res.length-1];
    divres2.append(h3, lower, strLength,letter_count,start,end);
   
})