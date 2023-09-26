const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "register.html"));
});
app.get("/index", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "index.html"));
});

io.on("connection", (socket) => {
  console.log("1");
  let users = require("../users/users.json");
  let msgAll = require("../users/message.json");
  socket.emit("users", users);
  socket.emit("msgAll", msgAll);
  socket.on("send", (obj) => {
    console.log(obj);
    let user = users.find((u) => u.id == obj.id);
    console.log(user,"aaa");
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
     let di = msgAll.length ? Number(msgAll[msgAll.length - 1].id) + 1 : 1;
    let newMsg = {
      id: di,
      username: user.username,
      msg: obj.message,
     time: hour + ":" + min,
      gender: user.gender,
    };
    console.log(newMsg);
    io.emit("message", { newMsg });
  });
  socket.on("register", (data) => {
    let ch = 0;
    let id;
    if (users.length > 0)
      users = users.map((user) => {
        if (user.username == data.username && user.age == data.age) {
          user.socket_id = socket.id;
          id = user.id;
          ch += 1;
        }
        return user;
      });
    if (ch == 0) {
      let user = data;
      user.id = users.length ? users[users.length - 1].id + 1 : 1;
      id = user.id;
      user.socket_id = socket.id;
      user.gender = data.gender;
       const d = new Date();
       let hour = d.getHours();
       let min = d.getMinutes();
      user.timeUser =hour+':'+min;
      users.push(user);
    }
    fs.writeFileSync(
      path.join(process.cwd(), "users", "users.json"),
      JSON.stringify(users, null, 4)
    );
    socket.emit("response", { id ,username:data.username});
  });
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
