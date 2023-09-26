const express = require("express");
const router = require("./modules");

const app = express();
const PORT = process.env.PORT || 2003;

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => console.log("listening on port " + PORT));
