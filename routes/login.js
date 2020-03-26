const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;
// Use database connection from server.js
const dbCallback = require('../server.js').db;
let db;
dbCallback(database => {
  db = database
});

router.get('/login', async (req, res, next) => {
  try {
    const user = await db.collection('users').findOne({ 'firstName': 'Jan' });
    console.log(user);
    res.render('test');
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;