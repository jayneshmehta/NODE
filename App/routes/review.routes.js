module.exports = app => {
    const review = require("../controllers/review.controller");
    var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/GettingreviewBproductId-:id", review.GettingreviewBproductId);
  
  app.use('/api/review', router);
}