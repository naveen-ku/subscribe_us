var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "subscribe_us"
});

app.get("/", function(req, res) {
  var q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function(err, results) {
    if (err) console.log(err);
    var count = results[0].count;
    res.render("home", { count: count });
  });
});

app.post("/register", (req, res) => {
  var person = {
    email: req.body.email
  };
  connection.query("INSERT INTO users SET ?", person, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

var PORT = 3001;
app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}.`);
});
