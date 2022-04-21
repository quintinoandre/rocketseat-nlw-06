import { getCustomRepository } from 'typeorm';

import { ComplimentsRepository, UsersRepository } from '@repositories';

import { IComplimentRequest } from './types';

class CreateComplimentService {
	async execute({
		tag_id,
		user_sender,
		user_receiver,
		message,
	}: IComplimentRequest) {
		const complimentsRepository = getCustomRepository(ComplimentsRepository);

		const usersRepository = getCustomRepository(UsersRepository);

		if (user_sender === user_receiver)
			throw new Error("You can't send a compliment to yourself");

		const userReceiverExists = await usersRepository.findOne(user_receiver);

		if (!userReceiverExists) throw new Error("User receiver doesn't exists");

		const compliment = complimentsRepository.create({
			tag_id,
			user_receiver,
			user_sender,
			message,
		});

		await complimentsRepository.save(compliment);

		return compliment;
	}
}

export { CreateComplimentService };
