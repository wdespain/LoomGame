const express = require("express");
const bodyParser = require("body-parser");

var app = express();

const port = 3000;

var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host)
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));
app.use(bodyParser.json({ limit: "3000mb" }));
app.use(bodyParser.urlencoded({ extended : false }));
