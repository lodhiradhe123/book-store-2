var express = require("express");
var router = express.Router();

const BOOKS = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/create", function (req, res, next) {
  res.render("create");
});
router.post("/data", function (req, res, next) {
  // const data = req.body;
  // res.json(req.body);
  BOOKS.push(req.body);
  res.redirect("/readall");
});
router.get("/readall", function (req, res) {
  res.render("readall", { books: BOOKS });
});
router.get("/delete/:index", function (req, res) {
  BOOKS.splice(req.params.index, 1);
  res.redirect("/create");
});
router.get("/update/:index", function (req, res) {
  const i = req.params.index;
  res.render("update", { index: i, book: BOOKS });
  console.log(i);
});
router.post("/updated/:index", function (req, res) {
  BOOKS[req.params.index] = req.body;
  res.redirect("/readall");
});
module.exports = router;
