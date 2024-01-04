const sql = require("./db.js");

const Categories = function (categories) {
    this.id = categories.id;
    this.name = categories.name;
    this.created_at = categories.created_at;
    this.updated_at = categories.updated_at;
}

Categories.getAll = (result) => {
    let query = "SELECT * FROM categories";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("categories: ", res);
      result(null, res);
    });
  };

  module.exports = Categories