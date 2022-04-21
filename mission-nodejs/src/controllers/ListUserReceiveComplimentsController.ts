import { Request, Response } from 'express';

import { ListUserReceiveComplimentsService } from '@services';

class ListUserReceiveComplimentsController {
	async handle({ userId }: Request, response: Response) {
		const listUserReceiveComplimentsService =
			new ListUserReceiveComplimentsService();

		const compliments = await listUserReceiveComplimentsService.execute(userId);

		return response.json(compliments);
	}
}

export { ListUserReceiveComplimentsController };
