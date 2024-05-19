const authMiddleware = (req, res, next) => {
	const token = req.headers.token;

	if (token !== 'hello')
		res.json({ success: false, message: 'Missing/Invalid token' });
	else next();
};

module.exports.authMiddleware = authMiddleware;
