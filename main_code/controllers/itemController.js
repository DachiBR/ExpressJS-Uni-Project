const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const { name, quantity } = req.body;

  const item = new Item({ name, quantity });

  const createdItem = await item.save();
  res.status(201).json(createdItem);
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const item = await Item.findById(id);

  if (item) {
    item.name = name;
    item.quantity = quantity;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findById(id);

  if (item) {
    await item.remove();
    res.json({ message: 'Item removed' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};
