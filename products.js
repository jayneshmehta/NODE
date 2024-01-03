var express = require("express");
const https = require("https");
const mysql = require("mysql");
const cors = require("cors");

var app = express();

app.use(express.json())

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 8080);

var con = mysql.createConnection({
  host: "localhost",
  password : "deep70",
  user : "root",
  database: "e_commerce"
})

app.get("/api/products", async function (req, res, next) {  
  try {
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        var statusCode = 200;
        res.json(result);
      });
    });
  } catch (err) {
    next(err);
  }
});


app.get("api/products/GettingProductById-id",async function (req, res ,next) {
  res.json(req.params.GettingProductById);
  try {
    con.connect(function(err) {
      if (err) throw err;
      con.query(`SELECT * FROM products where id = ${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        var statusCode = 200;
        res.json(result);
      });
    });
  } catch (err) {
    next(err);
  }
});

/*
app.post("/",async function (req, res, next) {
//   var response = { response: "This is POST method." };
const { username, password } = req.body;
// console.log(req.body)
// const { authorization } = req.headers;
res.json({
   username, password
});
//   try {
//    let url = `https://dummyjson.com/products/${req.params.id}`;
//    let resp = await fetch(url)
//    .then(response => response.json())
//    .then((jsonData) => {return jsonData})
//    return res.json(req.body);
//  } catch (err) {
//    next(err);
//  }
//   return res.json(req.body);
//   res.end(JSON.stringify(response));
});

app.put("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  var response = { response: "This is PUT method." };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.delete("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  var response = { response: "This is DELETE method." };
  console.log(response);
  res.end(JSON.stringify(response));
});

*/
var host = "192.168.101.102";
var port = "8080";

var server = app.listen(port,host, function () {
  console.log("Node.js API app listening at http://:%s", host, port);
});