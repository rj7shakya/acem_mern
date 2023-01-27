const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => console.log("err", err));

const schema = new mongoose.Schema({
  name: String,
});
const User = mongoose.model("user", schema);

app.get("/", (req, res) => {
  console.log();
  User.find({
    name: req.query.name,
  })
    .then((resp) => res.status(200).send(resp))
    .catch((err) => res.status(400).send(err));
});

app.post("/", (req, res) => {
  console.log(req.body);
  const newUser = new User(req.body);

  newUser
    .save()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});

// const user1 = new User({
//   name: "rajad",
// });

// user1
//   .save()
//   .then((res) => console.log("res1", res))
//   .catch((err) => console.log(err));

// User.find({ name: "rj" })
//   .then((res) => console.log("res2", res))
//   .catch((err) => console.log(err));
