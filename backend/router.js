const express = require('express');
const { getTasks, addTask, editTask } = require('./controller');

const router = express.Router();

router.get('/', getTasks);
router.post('/add', addTask);
router.put('/edit/:id', editTask);

module.exports = router;
