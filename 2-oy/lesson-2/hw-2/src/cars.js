let http = require("http");
let { writeF, readF } = require("./uilts/api");
let PORT = 6000;

let app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const fruitId = req.url.split("/")[2];
   let loggedUserId = req.headers.headers;
  //FRUIT CRUD
  //get data olish
  if (req.method === "GET" && req.url === "/datacars") {
     let courses = read_file("datacars.json").filter(
       (course) => course.userId === loggedUserId
     );

     res.end(JSON.stringify(courses));
  }
  //get id orqali data olish
  if (req.method === "GET" && req.url === `/datacars/${fruitId}`) {
    let IdWithFruit = readF("datacars.json").find((f) => (f.id === fruitId  && f.userId===loggedUserId));

    if (!IdWithFruit) return res.end("Course not found!");

    res.end(JSON.stringify(IdWithFruit));
  }
  //post
  if (req.method == "POST" && req.url === "/createcars") {
    req.on("data", (chunk) => {
      let newData = readF("datacars.json");
       let obj = JSON.parse(chunk);
       obj.userId = loggedUserId;
       newData.push(obj);
      writeF("datacars.json", newData);
      res.end("ok");
    });
  }
  //delete width id
  if (req.method === "DELETE" && req.url === `/deletecars/${fruitId}`) {
    let arr = readF("datacars.json");
    let obj = arr.find((f) => (f.id === fruitId && f.userId === loggedUserId));
    if (!obj) return res.end("obj not found");
    arr.forEach((e, idx) => {
      if (e.id === fruitId) {
        arr.splice(idx, 1);
      }
    });
    writeF("datacars.json", arr);
    console.log(arr);
    res.end("delete cars  obj");
  }
  //put with id
  if (req.method === "PUT" && req.url === `/updatecars/${fruitId}`) {
    let arr = readF("datacars.json");
    let obj = arr.find((f) => (f.id === fruitId && f.userId === loggedUserId));
    if (!obj) return res.end("obj not found");
    req.on("data", (chunk) => {
      let newObj = JSON.parse(chunk);
      for (const k1 in obj) {
        for (const k2 in newObj) {
          if (k1 == k2) {
            obj[k1] = newObj[k2];
          }
        }
      }
      console.log(obj);
      writeF("datacars.json", arr);
    });
    res.end("update");
  }
});
app.listen(PORT, () => {
  console.log("Server is running " + PORT);
});
