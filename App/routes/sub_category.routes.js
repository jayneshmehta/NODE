module.exports = app => {
    const sub_categories = require("../controllers/sub_category.controller");
    var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", sub_categories.findAll);
  
  app.use('/api/sub_category', router);
}