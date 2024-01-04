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

require("./App/routes/products.routes.js")(app);
require("./App/routes/categories.routes.js")(app);
require("./App/routes/sub_category.routes.js")(app);
require("./App/routes/review.routes.js")(app);

var host = "192.168.101.102";
var port = "8080";

var server = app.listen(port,host, function () {
  console.log("Node.js API app listening at http://:%s", host, port);
});