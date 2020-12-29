var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

var transactionSeed = [
  {
    name: "Vacation",
    value: 200,
  },
  {
    name: "Bootcamp",
    value: 4000,
  },
  {
    name: "food",
    value: 120,
  },
  {
    name: "groceries",
    value: 150,
  },
];
