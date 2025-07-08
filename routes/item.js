const express = require('express');
const router = express.Router();
const Item = require('../models/item.js');
const { addItems, fetchItems } = require('../controllers/itemController.js');

// POST /items → Add new item
router.post('/',addItems)

// GET /items → List all items
router.get('/', fetchItems)

module.exports = router;
