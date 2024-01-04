const sql = require("./db.js");

const Sub_categories = function (sub_categories) {
    this.id = sub_categories.id;
    this.name = sub_categories.name;
    this.created_at = sub_categories.created_at;
    this.updated_at = sub_categories.updated_at;
}

Sub_categories.getAll = (result) => {
    let query = "SELECT * FROM sub_categories";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("sub_categories: ", res);
      result(null, res);
    });
  };

  module.exports = Sub_categories;