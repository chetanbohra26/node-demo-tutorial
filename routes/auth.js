const express = require('express');
const { authMiddleware } = require('../middlewares/auth');

const router = express.Router();

router.post('/login', authMiddleware, (req, res) => {
	res.json({ success: true, message: 'Login Successful', token: 'hello' });
});

router.post('/register', (req, res) => {
	res.json({ success: true, message: 'Register Successful', token: 'hello' });
});

module.exports = router;
