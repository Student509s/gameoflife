// var express = require("Express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
//    var name = req.params.name;
//    res.send("<h1>Hello " + name +"</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");

// });
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// })
// app.get("/google", function(req, res){
//    res.redirect('http://google.com')
// })
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// })
// app.get("/google/:value",function(req,res){
//    var searchValue=req.params.value
//    res.redirect("google.com/search?q=search value"+searchValue)
// })
// app.get("/*",function(req,res){
//    res.send("404 - not found")
// })
// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();

var Company = require("./company")
var offers = {
   "myOffers": [{
      "id": 1,
      "position":"software developer"

   },
   {
      "id": 2,
      "position": "marketing expert"

   }
   ]
}
var company = new Company('Microsoft', 80, offers)
console.log(company.getOffers);