const express =  require('express');
const router = express.Router();

const Item = require('../../model/Item');


// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/', (req, res) => {
    Item
    .find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem
    .save().
    then(item => res.json(item));
});

// @route   GET api/items/:id
// @desc    Get one item
// @access  Public
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404)
    .json({message : "not found"}));
})
module.exports = router;

// @route   DELETE api/items/:id
// @desc    Delete item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json({ success: true })))
    .catch(err => res.status(404)
    .json({message : "not found"}));
})
module.exports = router;