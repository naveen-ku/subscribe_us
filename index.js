var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

var PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}.`);
});
