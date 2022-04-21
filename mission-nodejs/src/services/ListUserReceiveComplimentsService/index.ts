import { getCustomRepository } from 'typeorm';

import { ComplimentsRepository } from '@repositories';

class ListUserReceiveComplimentsService {
	async execute(userId: string) {
		const complimentsRepository = getCustomRepository(ComplimentsRepository);

		const compliments = await complimentsRepository.find({
			where: { user_receiver: userId },
			relations: ['UserSender', 'UserReceiver', 'tag'],
		});

		return compliments;
	}
}

export { ListUserReceiveComplimentsService };
