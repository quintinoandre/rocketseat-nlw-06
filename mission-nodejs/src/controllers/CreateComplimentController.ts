import { Request, Response } from 'express';

import { CreateComplimentService } from '@services';

class CreateComplimentController {
	async handle(
		{ body: { tag_id, user_sender, user_receiver, message } }: Request,
		response: Response
	) {
		const createComplimentService = new CreateComplimentService();

		const compliment = await createComplimentService.execute({
			tag_id,
			user_sender,
			user_receiver,
			message,
		});

		return response.json(compliment);
	}
}

export { CreateComplimentController };
