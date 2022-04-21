import { instanceToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { TagsRepository } from '@repositories';

class ListTagsService {
	async execute() {
		const tagsRepository = getCustomRepository(TagsRepository);

		const tags = await tagsRepository.find();

		return instanceToPlain(tags);
	}
}

export { ListTagsService };
