const sql = require("./db.js");

// constructor
const Products = function(products) {
    this.id = products.id; 
    this.title = products.title; 
    this.description = products.description; 
    this.price = products.price; 
    this.discountPercentage = products.discountPercentage; 
    this.rating = products.rating; 
    this.stock = products.stock; 
    this.brand = products.brand; 
    this.category_id = products.category_id; 
    this.thumbnail = products.thumbnail; 
    this.images = products.images; 
    this.created_at = products.created_at; 
    this.updated_at = products.updated_at; 
  };

  Products.create = (newProduct, result) => {
    sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created product: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    });
  };

  
  Products.findById = (id, result) => {
    sql.query(`SELECT * FROM products WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found product: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found product with the id
      result({ kind: "not_found" }, null);
    });
  };

  Products.GettingProductByCategoryId = (id, result) => {
    sql.query(`SELECT * FROM products join sub_categories on sub_categories.id = products.category_id WHERE sub_categories.category_id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found product: ", res[0]);
        result(null, res);
        return;
      }
  
      // not found product with the id
      result({ kind: "not_found" }, null);
    });
  };

  Products.GettingProductBySub_CategoryId = (id, result) => {
    sql.query(`SELECT * FROM products WHERE category_id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found product: ", res[0]);
        result(null, res);
        return;
      }
  
      // not found product with the id
      result({ kind: "not_found" }, null);
    });
  };

  Products.getAll = (result) => {
    let query = "SELECT * FROM products";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("products: ", res);
      result(null, res);
    });
  };

  module.exports = Products;