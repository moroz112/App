/**
 * Created by amoroz on 22.10.16.
 */
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());
var books = [
   {
      name: "Angular"
   },
   {
      name: "React"
   },
   {
      name: "Backbone"
   }
];
app.use('/', express.static(__dirname + '/routers'));
app.get('/books', function(req, res){
   res.send(books);
});
app.post('/addBook', function(req, res) {
   books.push({name: req.body.name});
   res.send(200);
});

app.listen(8080, function() {
   console.log("Server has started");
});
