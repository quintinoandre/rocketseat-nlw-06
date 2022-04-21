import 'dotenv/config';
import express from 'express';

const app = express();

const { PORT } = process.env;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.get('/test', (request, response) => response.send('Hello NLW'));

app.post('/test-post', (request, response) =>
	response.send('Hello NLW method POST')
);
