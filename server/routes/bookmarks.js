const express = require('express');
const router = express.Router();
const bookmarkData = require('../data/bookmarks.json');
// const { v4: uuidv4} = require('uuid');

router.get('/bookmark', (req, res) => {
    res.json(bookmarkData);
})

router.get('/bookmark/:id', (req, res) => {
    let currbookmark = req.params.id
        ? bookmarkData.find(bookmark => bookmark.id === req.params.id)
        : bookmarkData;

    res.json(currbookmark);
})

router.post('/bookmark', (req, res) => {
    bookmarkData.push(req.body);
    res.json(bookmarkData)
})

router.delete('/bookmark/:id', (req, res) => {
    const bookmarkItem = bookmarkData.find(item => item.id === req.params.id);
    const indexItem = bookmarkData.indexOf(bookmarkItem);
    if (indexItem > -1) {
        const newBookmark = bookmarkData.splice(indexItem, 1);
        if (newBookmark.length !== 0) {
            res.status(201).json(bookmarkData);
        } else {
            res.status(400).json("There is not such a inventory item to delete");
        }
    } else {
        res.status(400).json("There is not such a inventory item to delete");
    }
})


module.exports = router;