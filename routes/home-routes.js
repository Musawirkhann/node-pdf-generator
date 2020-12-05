const express = require('express');
const {homeview, generatePdf}  = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeview);
router.get('/download', generatePdf);

module.exports = {
    routes: router
}