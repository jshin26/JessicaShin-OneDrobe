const express = require('express');
const router = express.Router();
const stylelogData = require('../data/stylelog.json');
const multer = require('multer');
const { v4: uuidv4} = require('uuid');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        //accept
        cb (null, true);
    } else {
        //reject a file
        cb (null, false);
    }    
}

const upload = multer({storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/log', (req, res) => {
    res.json(stylelogData);
})

router.get('/log/:id', (req, res) => {

    const styleLog = {
        "id": uuidv4(),
        "author" : req.params.author,
        "title" : req.params.title,
        "description" : req.params.description,
        "date" : req.params.date,
        "image": document.image
    }

    let currLog = req.params.id
        ? styleLog.find(fav => fav.id === req.params.id)
        : styleLog;
    
    res.json({currLog});
})

router.post('/log', upload.single("image"), (req, res, next) => {
    console.log(req.file)

    const newLog = {
        "id": uuidv4(),
        "author" : req.body.author,
        "title" : req.body.title,
        "description" : req.body.description,
        "date" : req.body.date,
        "image": req.file.path 
    }
    stylelogData.push(req.body);
    
    res.json({
        newLog: newLog
    })
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