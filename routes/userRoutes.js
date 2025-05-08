const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta principal
router.get('/', userController.getUsers);

module.exports = router;
