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

router.delete('/fav/:id', (req, res) => {
    const favItem = favouritesData.find(item => item.id === req.params.id);
    const indexItem = favouritesData.indexOf(favItem);
    if (indexItem > -1) {
        const newFavourites = favouritesData.splice(indexItem, 1);
        if (newFavourites.length !== 0) {
            res.status(201).json(favouritesData);
        } else {
            res.status(400).json("There is not such a inventory item to delete");
        }
    } else {
        res.status(400).json("There is not such a inventory item to delete");
    }
})


module.exports = router;