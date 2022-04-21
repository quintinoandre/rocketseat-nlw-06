import 'reflect-metadata';
import 'dotenv/config';
import './database';
import { app } from './app';

const {
	env: { PORT },
} = process;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
