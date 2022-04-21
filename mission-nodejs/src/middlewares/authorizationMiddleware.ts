import { Request, Response, NextFunction } from 'express';

function authorizationMiddleware(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const admin = true;

	if (admin) return next();

	return response.status(401).json({ error: 'Unauthorized' });
}

export { authorizationMiddleware };
