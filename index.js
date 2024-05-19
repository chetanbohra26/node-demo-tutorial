require('dotenv').config();

const express = require('express');

const { authMiddleware } = require('./middlewares/auth');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 7501;

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);

const data = [1, 2, 3, 4, 5, 6];

app.get('/', authMiddleware, (req, res) => {
	res.json(data);
});

app.get('/:id', authMiddleware, (req, res) => {
	const id = req.params.id;
	res.json(data[id]);
});

app.post('/hello', authMiddleware, (req, res) => {
	const body = req.body;
	const url = req.url;
	const query = req.query;
	res.json({ body, url, query });
});

app.patch('/hello', authMiddleware, (req, res) => {
	const body = req.body;
	const url = req.url;
	const query = req.query;
	res.json({ body, url, query });
});

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Listening on port ${PORT}`);
});
