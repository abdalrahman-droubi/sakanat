const express = require('express');
const router = express.Router();
const providerControllers = require('../controllers/providerController')

router.get('/getProviders', providerControllers.getProvider);
router.get('/getOneProviders/:id', providerControllers.getOneProvider);
module.exports = router;