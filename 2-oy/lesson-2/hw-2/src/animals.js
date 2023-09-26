let http = require("http");
let { writeF, readF } = require("./uilts/api");
let PORT = 5000;

let app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const fruitId = req.url.split("/")[2];
  let loggedUserId = req.headers.headers;
  //get data olish
  if (req.method === "GET" && req.url === "/dataanimals") {
   let courses = read_file("dataanimals.json").filter(
     (course) => course.userId === loggedUserId
   );

   res.end(JSON.stringify(courses));
  }
  //get id orqali data olish
  if (req.method === "GET" && req.url === `/dataanimals/${fruitId}`) {
    let IdWithFruit = readF("dataanimals.json").find((f) => (f.id === fruitId && f.userId===loggedUserId));

    if (!IdWithFruit) return res.end("Course not found!");

    res.end(JSON.stringify(IdWithFruit));
  }
  //post
  if (req.method == "POST" && req.url === "/createanimals") {
    req.on("data", (chunk) => {
      let newData = readF("dataanimals.json");
      let obj = JSON.parse(chunk);
      obj.userId = loggedUserId;
      newData.push(obj);
      writeF("dataanimals.json", newData);
      res.end("ok");
    });
  }
  //delete width id
  if (req.method === "DELETE" && req.url === `/deleteanimals/${fruitId}`) {
    let arr = readF("dataanimals.json");
    let obj = arr.find((f) => (f.id === fruitId && f.userId === loggedUserId));
    if (!obj) return res.end("obj not found");
    arr.forEach((e, idx) => {
      if (e.id === fruitId) {
        arr.splice(idx, 1);
      }
    });
    writeF("dataanimals.json", arr);
    console.log(arr);
    res.end("delete fruit obj");
  }
  //put with id
  if (req.method === "PUT" && req.url === `/updateanimals/${fruitId}`) {
    let arr = readF("dataanimals.json");
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
      writeF("dataanimals.json", arr);
    });
    res.end("update");
  }
});
app.listen(PORT, () => {
  console.log("Server is running " + PORT);
});
