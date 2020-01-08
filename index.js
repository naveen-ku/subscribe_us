var express = require("express");
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
  host: "host",
  user: "user",
  password: "password",
  database: "subscribe_us"
});

app.get("/", (req, res) => {
  var q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, (err, results) => {
    if (err) throw err;
    var test = results[0].count;
    res.send(`We have ${test} users`);
  });
});

var PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}.`);
});
