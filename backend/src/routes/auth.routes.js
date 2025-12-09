const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authGuard = require('../middleware/authGuard');

// POST /auth/login - placeholder login endpoint
router.post('/login', authController.login);

// POST /auth/logout - placeholder logout endpoint, requires authenticated user once real auth is added
router.post('/logout', authGuard, authController.logout);

// Future: add refresh token endpoint, password reset, and role-based access hooks
module.exports = router;

