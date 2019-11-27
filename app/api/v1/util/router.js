const express = require('express');
var router = express.Router();
var health = require('./service/health');

router.get('/health', health.healthCheck);

module.exports = router;