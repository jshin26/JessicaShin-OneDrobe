const express = require('express');
const router = express.Router();
const productData = require('../data/product.json');
// const { v4: uuidv4} = require('uuid');

router.get('/', (req, res) => {
    res.json(productData)
})

router.get('/:id', (req, res) => {
    if(productData.find(product => product.id === req.params.id)) {
        let currProduct = req.params.id
            ? productData.find(product => product.id === req.params.id)
            : productData;

        res.json(currProduct);
    } else {
        res.status(404).json("There are no matching product. Please check product id.")
    }
})

module.exports = router;