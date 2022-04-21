import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { IPayload } from './types';

function authenticationMiddleware(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const {
		headers: { authorization: bearerToken },
	} = request;

	if (!bearerToken) response.sendStatus(401);

	const token = bearerToken.replace('Bearer', '').trim();
	// or const [,token] = bearerToken.split(' ');

	const {
		env: { JWT_SECRET },
	} = process;

	try {
		const { sub: userId } = verify(token, JWT_SECRET) as IPayload;

		request.userId = userId;

		return next();
	} catch (err) {
		response.sendStatus(401);
	}
}

export { authenticationMiddleware };
