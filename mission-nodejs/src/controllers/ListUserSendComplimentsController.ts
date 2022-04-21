import { Request, Response } from 'express';

import { ListUserSendComplimentsService } from '@services';

class ListUserSendComplimentsController {
	async handle({ userId }: Request, response: Response) {
		const listUserSendComplimentsService = new ListUserSendComplimentsService();

		const compliments = await listUserSendComplimentsService.execute(userId);

		return response.json(compliments);
	}
}

export { ListUserSendComplimentsController };
