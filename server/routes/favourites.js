const express = require('express');
const router = express.Router();
const favouritesData = require('../data/favourites.json');
// const { v4: uuidv4} = require('uuid');

router.get('/fav', (req, res) => {
    res.json(favouritesData);
})

router.get('/fav/:id', (req, res) => {
    let currFav = req.params.id
        ? favouritesData.find(fav => fav.id === req.params.id)
        : favouritesData;

    res.json(currFav);
})

router.post('/fav', (req, res) => {
    favouritesData.push(req.body);
    res.json(favouritesData)
})


module.exports = router;