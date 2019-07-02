const path = require("path");
const hbs = require("hbs");
const express = require("express");
var bodyParser = require("body-parser");
const wordToTest = require("plugging-sentiment-charles");
let testing = "";
let edna = false;
//const hbs = require("hbs");

const app = express();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

// //define paths for Exp]
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");

// //setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// // Setup satic pages directory to serve
app.use(express.static(publicPath));
//app.use(urlencodedParser);

app.get("", (req, res) => {
  res.render("index");
});

app.post("/", jsonParser, (req, res) => {
  testing = req.body.sentence;
  testing = wordToTest(testing);
  console.log(testing);

  res.json({ data: testing });
});

// app.post("/weather", jsonParser, (req, res) => {
//   testing = req.body.sentence;
//   testing = wordToTest(testing);
//   console.log(testing);
//   console.log("fake");

//   res.json({ data: testing });
//   res.json({})
// });

// app.post("/", urlencodedParser, (req, res) => {
//   console.log(req.body);
//   //   res.render("index", {});
// });

app.listen(3000, () => {
  console.log("server is up");
});
