import { getCustomRepository } from 'typeorm';

import { ComplimentsRepository } from '@repositories';

class ListUserSendComplimentsService {
	async execute(userId: string) {
		const complimentsRepository = getCustomRepository(ComplimentsRepository);

		const compliments = await complimentsRepository.find({
			where: { user_sender: userId },
			relations: ['UserSender', 'UserReceiver', 'tag'],
		});

		return compliments;
	}
}

export { ListUserSendComplimentsService };
