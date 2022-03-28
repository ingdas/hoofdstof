var express = require("express");
var fs = require("fs");
var https = require("https");
var app = express();

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

app.use(express.static('build'))

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.crt"),
    },
    app
  )
  .listen(443, function () {
    console.log(
      "Hoofdstof listening"
    );
  });