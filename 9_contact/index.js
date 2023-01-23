const express = require("express");
let contacts = [
  {
    id: 1,
    name: "dipson",
    number: "1231231231",
  },
  {
    id: 2,
    name: "santosh",
    number: "1231231231",
  },
  {
    id: 3,
    name: "samriddha",
    number: "1231231231",
  },
];
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to home!");
});

app.get("/contacts", (req, res) => {
  res.send(contacts);
});

app.get("/contacts/:id", (req, res) => {
  console.log(req.params.id);
  const Filteredcontact = contacts.filter((i) => i?.id == req.params.id);
  res.send(Filteredcontact);
});

app.delete("/contacts/:id", (req, res) => {
  console.log(req.params.id);
  contacts = contacts.filter((i) => i?.id != req.params.id);
  res.send(contacts);
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
