var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require('multer');

// Importing API controllers
const batchesController = require('../controllers/batchesController');

// Importing middleware for protected routes
const adminWebTokenMiddleware = require('../middlewares/adminWebTokenMiddleware');

// Importing backend validations
const batchValidate = require('../middlewares/validation/batchValidate');

// Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dirImage = path.join('public', 'images')
        return cb(null, dirImage);
    },
    filename: function (req, file, cb) {

        return cb(null, 'Lote' + '_' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage
});

// Batches Routes
router.get('', batchesController.index);
router.get('/:id', batchesController.detail);
router.patch('/edit/:id/', adminWebTokenMiddleware, upload.single('image'), batchValidate, batchesController.edit);

module.exports = router;