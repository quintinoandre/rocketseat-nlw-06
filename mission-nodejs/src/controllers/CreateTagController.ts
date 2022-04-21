import { Request, Response } from 'express';

import { CreateTagService } from '@services';

class CreateTagController {
	async handle({ body: { name } }: Request, response: Response) {
		const createTagService = new CreateTagService();

		const tag = await createTagService.execute({ name });

		return response.json(tag);
	}
}

export { CreateTagController };
