var mongoose = require('mongoose');
var Book = require('../models/Book.js');

var CategorySchema = new mongoose.Schema({
    title: String,
    description: String
  });

module.exports = mongoose.model('Category', CategorySchema);