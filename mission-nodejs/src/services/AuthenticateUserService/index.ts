import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';

import { UsersRepository } from '@repositories';

import { IAuthenticateRequest } from './types';

class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateRequest) {
		const usersRepository = getCustomRepository(UsersRepository);

		const user = await usersRepository.findOne({ email });

		if (!user) throw new Error('Email or password is invalid');

		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) throw new Error('Email or password is invalid');

		const {
			env: { JWT_SECRET, JWT_EXPIRES },
		} = process;

		const token = sign({ email: user.email }, JWT_SECRET, {
			subject: user.id,
			expiresIn: JWT_EXPIRES,
		});

		return token;
	}
}

export { AuthenticateUserService };
