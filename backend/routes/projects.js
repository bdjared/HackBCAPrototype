var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/projects', function(req, res, next) {
  res.send('respond with a project list');
});

module.exports = router;
