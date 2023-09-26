import express from "express";
import { router } from "./router/auth";

const app = express();
app.use(express.json());

app.use(router);

app.listen(9000, () => console.log(9000));
