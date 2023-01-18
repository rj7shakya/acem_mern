const express = require("express");

const app = express();

app.post("/", (req, res) => {
  res.json({
    name: "acem",
  });
});

app.get("/acem", (req, res) => {
  res.send("<h1>acem</h1>");
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
