module.exports = app => {
    const products = require("../controllers/products.controller.js");
    var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", products.findAll);

  // Retrieve all Tutorials
  router.get("/GettingProductById-:id", products.findbyId);

  // Retrieve all Tutorials
  router.get("/GettingProductByCategoryId-:id", products.GettingProductByCategoryId);

  // Retrieve all Tutorials
  router.get("/GettingProductBySub_CategoryId-:id", products.GettingProductBySub_CategoryId);

  app.use('/api/products', router);
}