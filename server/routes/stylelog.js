const express = require('express');
const router = express.Router();
const stylelogData = require('../data/stylelog.json');
// const multer = require('multer');
const { v4: uuidv4} = require('uuid');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function(req, file, cb) {
//         cb(null, Date.now() + file.originalname)
//     }
// });

// const fileFilter = (req, file, cb) => {

//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         //accept
//         cb (null, true);
//     } else {
//         //reject a file
//         cb (null, false);
//     }    
// }

// const upload = multer({storage: storage, 
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });

router.get('/log', (req, res) => {
    res.json(stylelogData);
})

// router.get('/log/:id', (req, res) => {
//     if(stylelogData.find(log => log.id === req.params.id)) {
//         let currLog = req.params.id
//             ? stylelogData.find(log => log.id === req.params.id)
//             : stylelogData;

//         res.json(currLog);
//     } else {
//         res.status(404).json("There are no matching product. Please check product id.")
//     }
// })
router.get('/log/:id', (req, res) => {
    // if(stylelogData.find(log => log.id === req.params.id)) {
    //     let currLog = req.params.id
    //         ? stylelogData.find(log => log.id === req.params.id)
    //         : stylelogData;

    //     res.json();
    // } else {
    //     res.status(404).json("There are no matching product. Please check product id.")
    // }
    if(stylelogData.find(log => log.id === req.params.id)) {
        let currLog = req.params.id
        ? stylelogData.find(log => log.id === req.params.id)
        : stylelogData

        if (currLog.length !== 0) {
            const logId = currLog.id
            const logComments = currLog.comments
            res.status(201).json({logId, logComments})
        }
    }
    
})

// let currBrand = req.params.id
//         ? brandData.find(brand => brand.id === req.params.id)
//         : brandData;
    
//     if (currBrand.length !== 0) {
//         const productById = productData.filter(item => item.brandId === req.params.id);
//         res.status(201).json({currBrand, productById})
//     }

router.put('/log/:id',(req, res) => {
    let currLog = req.params.id
        ? stylelogData.find(log => log.id === req.params.id)
        : stylelogData;

    res.json(currLog.likes++)
})

// upload.single("image"),
router.post('/log', (req, res, next) => {

    const newLog = {
        "id": uuidv4(),
        "author" : req.body.author,
        "title" : req.body.title,
        "description" : req.body.description,
        "date" : req.body.date,
    }
    stylelogData.push(req.body);
    
    res.json({
        newLog: newLog
    })
})

// router.delete('/log/:id', (req, res) => {
//     const logItem = stylelogData.find(item => item.id === req.params.id);
//     const indexItem = stylelogData.indexOf(logItem);
//     if (indexItem > -1) {
//         const newLog = stylelogData.splice(indexItem, 1);
//         if (newLog.length !== 0) {
//             res.status(201).json(stylelogData);
//         } else {
//             res.status(400).json("There is not such a inventory item to delete");
//         }
//     } else {
//         res.status(400).json("There is not such a inventory item to delete");
//     }
// })

module.exports = router;