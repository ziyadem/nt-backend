const express = require("express");
const router = require("./modules");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", router);


app.use("/*", (_, res) => res.status(404).json("Bunday Api topilmadi"))
app.listen(PORT, () => console.log(" listening on port " + PORT));
