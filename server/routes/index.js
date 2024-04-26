const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.post('/create-short-url', controller.createShortUrl);
router.get('/:url', controller.getUrl);

module.exports = router;