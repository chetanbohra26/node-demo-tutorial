const express = require('express');

const router = express.Router();

router.get(
	'/data',
	/* authMiddleware, */ (req, res) => {
		res.json([6, 54, 3, 2]);
	}
);

/* module.exports.userRouter = router;
const {userRouter} = require('./routes/user'); */

module.exports = router;
