const categories = require("../models/category.model"); 

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    categories.getAll( (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
