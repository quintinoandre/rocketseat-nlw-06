import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';

import { UsersRepository } from '@repositories';

async function authorizationMiddleware(
	{ userId }: Request,
	response: Response,
	next: NextFunction
) {
	const usersRepository = getCustomRepository(UsersRepository);

	const { admin } = await usersRepository.findOne(userId);

	if (admin) return next();

	return response.status(401).json({ error: 'Unauthorized' });
}

export { authorizationMiddleware };
