let http = require("http");
let { writeF, readF } = require("./uilts/api");
let PORT = 7000;

let app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const fruitId = req.url.split("/")[2];
  //register
   if (req.url === "/register") {
     req.on("data", async (chunk) => {
       let { username, email, password } = JSON.parse(chunk);

       let users = read_file("datauser.json");
       let foundedUser = users.find((u) => u.email === email);

       if (foundedUser)
         return res.end(
           JSON.stringify({
             msg: "Email already exists!!!",
           })
         );

       let hashedPsw = await bcrypt.hash(password, 12);

       users.push({
         id: uuid.v4(),
         userId:uuid.v4(),
         username,
         email,
         password: hashedPsw,
       });

       write_file("datauser.json", users);
       res.end(
         JSON.stringify({
           msg: "Registrated!",
           userId:users.userId,
         })
       );
     });
   }

   if (req.url === "/login") {
     req.on("data", async (chunk) => {
       const { suppername, password } = JSON.parse(chunk);

       let users = read_file("users.json");

       let foundedUser = users.find(
         (user) => user.username === suppername || user.email === suppername
       );

       if (!foundedUser)
         return res.end(
           JSON.stringify({
             msg: "User not found!",
           })
         );

       let isLogged = await bcrypt.compare(password, foundedUser.password);

       if (!isLogged) return res.end(JSON.stringify({ msg: "Password xato!" }));

       delete foundedUser.password;
       res.end(
         JSON.stringify({
           msg: "Logged",
           data: foundedUser,
         })
       );
     });
   }
  //get data olish
  if (req.method === "GET" && req.url === "/datauser") {
    let result = readF("datauser.json");
    res.end(JSON.stringify(result));
  }
  //get id orqali data olish
  if (req.method === "GET" && req.url === `/datauser/${fruitId}`) {
    let IdWithFruit = readF("datauser.json").find((f) => f.id === fruitId);

    if (!IdWithFruit) return res.end("Course not found!");

    res.end(JSON.stringify(IdWithFruit));
  }
  //post
  if (req.method == "POST" && req.url === "/createuser") {
    req.on("data", (chunk) => {
      let newData = readF("datauser.json");
      newData.push(JSON.parse(chunk));
      console.log(newData);
      writeF("datauser.json", newData);
      res.end("ok");
    });
  }
  //delete width id
  if (req.method === "DELETE" && req.url === `/deleteuser/${fruitId}`) {
    let arr = readF("datauser.json");
    let obj = arr.find((f) => f.id === fruitId);
    if (!obj) return res.end("obj not found");
    arr.forEach((e, idx) => {
      if (e.id === fruitId) {
        arr.splice(idx, 1);
      }
    });
    writeF("datauser.json", arr);
    console.log(arr);
    res.end("delete fruit obj");
  }
  //put with id
  if (req.method === "PUT" && req.url === `/updateuser/${fruitId}`) {
    let arr = readF("datauser.json");
    let obj = arr.find((f) => f.id === fruitId);
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
      writeF("datauser.json", arr);
    });
    res.end("update");
  }
});
app.listen(PORT, () => {
  console.log("Server is running " + PORT);
});
