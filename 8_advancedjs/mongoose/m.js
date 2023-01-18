const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connected"))
  .catch((err) => console.log("err", err));
