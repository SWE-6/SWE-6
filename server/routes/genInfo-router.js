const express = require('express');

const ItemController = require('../controllers/geninfoController');

const router = express.Router();

router.get("/geninfo", ItemController);

module.exports = router;