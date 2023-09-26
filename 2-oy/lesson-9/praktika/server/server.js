const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const path = require("path");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "db/files")));
app.use(fileUpload({limits: { fileSize: 50 * 1024 * 1024 },}));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "index.html"));
});
app.post("/",(req,res)=>{
          let fileUp = req.files.doc;
          console.log(fileUp);
          fileUp.mv("db/files/" + fileUp.name,
            (err) => {
              if (err) {
                return res.status(500).send(err);
              }
              let file1 = {
                name: fileUp.name,
                url: fileUp.name,
              };
              let k=fs.readFileSync("db/json/file.json", "utf-8");
            //   console.log(file);
              const data = [...k, file1]
            //   console.log(k);
             
              fs.writeFileSync("db/json/file.json", JSON.stringify(data), "utf-8")
            }
          );
    res.send("ok"); 
})

app.listen(3000, () => {
  console.log("listening on *:3000");
});
