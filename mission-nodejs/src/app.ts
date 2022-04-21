import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';

import { authenticationMiddleware, errorMiddleware } from '@middlewares';
import {
	LoginRouter,
	TagsRouter,
	UsersRouter,
	ComplimentsRouter,
} from '@routers';

const app = express();

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.use('/login', LoginRouter);
app.use('/users', authenticationMiddleware, UsersRouter);
app.use('/tags', authenticationMiddleware, TagsRouter);
app.use('/compliments', authenticationMiddleware, ComplimentsRouter);

app.use(errorMiddleware);

export { app };
