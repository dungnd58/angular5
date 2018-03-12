var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Book = require('../models/Book.js');
var Category = require('../models/Category.js');

/* GET ALL CATEGORIES */
router.get('/category', function(req, res, next) {
  Category.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* CREATE CATEGORY */
router.post('/category', function(req, res, next) {
  Category.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CATEGORY */
router.delete('/category/:id', function(req, res, next) {
  Category.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    else {
      Book.remove({categoryId: req.params.id}, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    }
  });
});

/* GET ALL BOOKS IN A CATEGORY*/
router.get('/category/:id', function(req, res, next) {
  Book.find({categoryId: req.params.id}, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/book/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/book', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/book/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/book/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;