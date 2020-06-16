const express = require('express');
const router = express.Router();
const productData = require('../data/product.json');
const brandData = require('../data/brands.json');

router.get('/brand', (req, res) => {
    res.json(brandData)
})

router.get('/brand/:id', (req, res) => {
    let currBrand = req.params.id
        ? brandData.find(brand => brand.id === req.params.id)
        : brandData;
    
    if (currBrand.length !== 0) {
        const productById = productData.filter(item => item.brandId === req.params.id);
        res.status(201).json({currBrand, productById})
    }
})

module.exports = router;