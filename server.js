/**
 * Created by amoroz on 22.10.16.
 */
var express = require("express");
var app = express();

app.use('/', express.static(__dirname));

app.listen(8080, function() {
   console.log("Server has started");
});