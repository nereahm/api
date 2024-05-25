const express = require('express');
const router = express.Router();
const bragsController = require('../controller/bragsController');

router.get('/', bragsController.read);

module.exports = router;
