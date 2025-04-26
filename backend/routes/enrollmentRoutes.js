const express = require('express');
const { enrollClient, getClientPrograms } = require('../controllers/enrollmentController');

const router = express.Router();

router.post('/', enrollClient);               
router.get('/:clientId', getClientPrograms);   

module.exports = router;
