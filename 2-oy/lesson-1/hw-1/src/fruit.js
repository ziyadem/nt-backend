let http=require('http')
let {writeF,readF}=require('./uilts/api')
let PORT=4000

let app=http.createServer((req,res)=>{
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const fruitId = req.url.split("/")[2];
    //FRUIT CRUD
    //get data olish
    if (req.method === "GET" && req.url === "/data") {
      let result = readF("data.json");
      res.end(JSON.stringify(result));
    }
    //get id orqali data olish
     if (req.method === "GET" && req.url === `/data/${fruitId}`) {
       let IdWithFruit = readF("data.json").find(
         (f) => f.id === fruitId
       );

       if (!IdWithFruit) return res.end("Course not found!");

       res.end(JSON.stringify(IdWithFruit));
     }
     //post
     if(req.method=='POST' && req.url==='/create'){
        req.on('data',chunk=>{
            let newData=readF('data.json');
            newData.push(JSON.parse(chunk));
            console.log(newData);
            writeF('data.json',newData)
            res.end('ok')
        })
     }
     //delete width id
     if (req.method === "DELETE" && req.url === `/delete/${fruitId}`) {
        let arr = readF("data.json");
        let obj=arr.find(f=> f.id===fruitId)
        if(!obj) return res.end('obj not found')
        arr.forEach((e,idx) => {
            if(e.id===fruitId){
                arr.splice(idx,1)
            }
        });
        writeF('data.json',arr)
        console.log(arr);
        res.end('delete fruit obj')
        
     }
     //put with id
     if(req.method==="PUT" && req.url===`/update/${fruitId}`){
        let arr = readF("data.json");
        let obj = arr.find((f) => f.id === fruitId);
        if (!obj) return res.end("obj not found");
        req.on('data',chunk=>{
           let newObj=JSON.parse(chunk);
           for (const k1 in obj) {
               for (const k2 in newObj) {
                   if(k1==k2){
                    obj[k1]=newObj[k2]
                   }
               }
           }
           console.log(obj);
           writeF('data.json',arr)
        })
        res.end('update')

     }

})
app.listen(PORT,()=>{
    console.log('Server is running '+ PORT );
})