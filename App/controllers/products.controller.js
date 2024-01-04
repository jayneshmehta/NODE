const products = require("../models/products.model.js");


// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    products.getAll( (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };


// Retrieve Products from the database by ID (with condition).
exports.findbyId = (req, res) => {
    var id =  (req.params.id);
    products.findById( id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

// Retrieve Products from the database by ID (with condition).
exports.GettingProductByCategoryId = (req, res) => {
    var id =  (req.params.id);
    products.GettingProductByCategoryId( id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

// Retrieve Products from the database by ID (with condition).
exports.GettingProductBySub_CategoryId = (req, res) => {
    var id =  (req.params.id);
    products.GettingProductBySub_CategoryId( id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };