const sql = require("./db.js");

const Reviews = function (reviews) {
  this.id  = reviews.id;
  this.productId= reviews.productId;
  this.userId= reviews.userId;
  this.features= reviews.features;
  this.comments= reviews.comments;
  this.rating= reviews.rating;
  this.created_id= reviews.created_id;
  this.updated_id= reviews.updated_id;
  this.productId= reviews.productId;
  this.userId= reviews.userId;
}

Reviews.GettingreviewBproductId = (id,result) => {

    let query = `SELECT * FROM reviews JOIN users ON users.id = reviews.userId WHERE reviews.productId = ${id}`;
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("reviews: ", res);
      result(null, res);
    });
  };

  module.exports = Reviews;