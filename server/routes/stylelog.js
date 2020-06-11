const express = require('express');
const router = express.Router();
const stylelogData = require('../data/stylelog.json');

router.get('/log', (req, res) => {
    res.json(stylelogData);
})

router.get('/log/:id', (req, res) => {
    let currLog = req.params.id
        ? stylelogData.find(fav => fav.id === req.params.id)
        : stylelogData;

    res.json(currLog);
})

router.post('/log', (req, res) => {
    stylelogData.push(req.body);
    res.json(stylelogData)
})

router.delete('/log/:id', (req, res) => {
    const logItem = stylelogData.find(item => item.id === req.params.id);
    const indexItem = stylelogData.indexOf(logItem);
    if (indexItem > -1) {
        const newLog = stylelogData.splice(indexItem, 1);
        if (newLog.length !== 0) {
            res.status(201).json(stylelogData);
        } else {
            res.status(400).json("There is not such a inventory item to delete");
        }
    } else {
        res.status(400).json("There is not such a inventory item to delete");
    }
})


module.exports = router;