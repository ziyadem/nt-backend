import fileUpload from "express-fileupload";
import express from "express";
import config from "config";
import path from "path";
import fs from "fs";
const PORT = config.get("port") || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({ limits: { fileSize: 1024 * 1024 * 5 } }));
app.use("/images", express.static(path.join(process.cwd(), "images"))); //http://localhost:5000/video.mp4
app.use("/videos", express.static(path.join(process.cwd(), "videos"))); //http://localhost:5000/video.mp4
app.get("/users", (req, res) => {
  res.send(
    fs.readFileSync(path.join(process.cwd(), "db", "datas.json"), "utf-8")
  );
});

app.get("*", (req, res) => {
  let url = req.url.slice(1);
  res.sendFile(path.join(process.cwd(), "views", url + ".html"));
});

app.post("/register", (req, res) => {
  const { image } = req.files;
  let users = fs.readFileSync(
    path.join(process.cwd(), "db", "datas.json"),
    "utf-8"
  );

  users = JSON.parse(users);
  let mimetype = path.extname(image.name);

  image.mv(path.join(process.cwd(), "images", image.name));

  req.body.imagePath = "/images/" + image.name;
  req.body.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(req.body);

  fs.writeFileSync(
    path.join(process.cwd(), "db", "datas.json"),
    JSON.stringify(users, null, 4)
  );

  res.send({ message: "ok" });
});

app.delete("/users/:nomi", (req, res) => {
  fs.unlinkSync(path.join(process.cwd(), "images", req.params.nomi));
  
  res.send("ok");
});

app.listen(PORT, console.log("Server is running " + PORT));
