const reviews = require("../models/review.model"); 

// Retrieve all Products from the database.
exports.GettingreviewBproductId = (req, res) => {
  var id =  (req.params.id);
  reviews.GettingreviewBproductId( id , (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
