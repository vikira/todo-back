var express = require('express');
var router = express.Router();

const todos = [
  { id: 1, title: 'todo1' },
  { id: 2, title: 'todo2' },
  { id: 3, title: 'todo3' },
  { id: 4, title: 'todo4' },
  { id: 5, title: 'todo5' },
  { id: 6, title: 'todo6' },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(todos);
});

module.exports = router;
