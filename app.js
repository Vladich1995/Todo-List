const express = require("express");
const bodyparser = require("body-parser");

const app = express();
let items = [];

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  let today = new Date();
  let options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {vare: day, newListItem: items});
});

app.post("/", function(req, res){
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
