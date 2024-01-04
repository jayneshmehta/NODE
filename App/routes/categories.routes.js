module.exports = app => {
    const category = require("../controllers/category.controller");
    var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", category.findAll);
  
  app.use('/api/categorys', router);
}