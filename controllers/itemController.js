const Item = require('../models/item.js');

const addItems = async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        const newItem = new Item({ name, quantity, price });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const fetchItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addItems, fetchItems };
