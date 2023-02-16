const express = require("express");
const app = express();
const DBconnect = require("./db");
const cors = require("cors");
const router = require("./router/router");
DBconnect();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
app.use("/submit", router);

app.listen(5000, () => {
  console.log("server listen on 5000");
});
