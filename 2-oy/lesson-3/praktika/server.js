let http = require("http");
let PORT = 1717;
let { writeF, readF } = require("./uilts/app");


let app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  if (req.method === "POST" && req.url === "/register") {
    req.on("data", (chunk) => {
      let newuser = JSON.parse(chunk);
      let arrUser = readF("users.json");
      if (
        newuser.email &&
        newuser.username &&
        newuser.password &&
        newuser.name
      ) {
      } else {
        return res.end(
          JSON.stringify({
            msg: "malumot toliq emas!!! tekshiring",
          })
        );
      }
      for (let i = 0; i < arrUser.length; i++) {
        if (
          arrUser[i].email === newuser.email ||
          arrUser[i].username === newuser.username
        ) {
          return res.end(
            JSON.stringify({
              msg: "email yoki username allaqachon mavjud",
            })
          );
        }
      }
      let passwordHash = bcrypt.hashSync(newuser.password, 12);
      newuser["id"] = uuid.v4();
      newuser.password = passwordHash;
      arrUser.push(newuser);
      writeF("users.json", arrUser);
      res.end(
        JSON.stringify({
          msg: "Registrated",
          id: newuser.id,
        })
      );
    });
  }
  if (req.method === "POST" && req.url === "/login") {
    req.on("data", (chunk) => {
      let logUser = JSON.parse(chunk);
      if (!logUser.username || !logUser.password)
        return res.end(
          JSON.stringify({
            msg: "yousername yoki password yoq",
          })
        );
      let usersArr = readF("users.json");
      let userObj = usersArr.find(
        (u) =>
          u.username === logUser.username &&
          bcrypt.compareSync(logUser.password, u.password)
      );
      if (!userObj)
        return res.end(JSON.stringify({ msg: "username yoki password hato" }));
      res.end(
        JSON.stringify({
          msg: "loged!!!",
          data: {
            id: userObj.id,
          },
        })
      );
    });
  }
});
app.listen(PORT, () => {
  console.log("Server is runing" + "  " + PORT);
});