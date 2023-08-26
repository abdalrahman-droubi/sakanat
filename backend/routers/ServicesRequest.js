const express = require('express');
const router = express.Router();
const ServicesRequestController = require('../controllers/ServicesRequestController')

router.post('/createServicesRequest/:userId/:providerId', ServicesRequestController.handleNewRequestServices);
router.get('/getAllRequest/:userId', ServicesRequestController.getAllRequest);
module.exports = router;