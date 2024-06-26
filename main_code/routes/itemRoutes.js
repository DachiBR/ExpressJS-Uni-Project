const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');
const { protect, admin, warehouseManager } = require('../middleware/authMiddleware');

router.get('/', protect, getItems);
router.post('/', protect, warehouseManager, createItem);
router.put('/:id', protect, warehouseManager, updateItem);
router.delete('/:id', protect, warehouseManager, deleteItem);

module.exports = router;
