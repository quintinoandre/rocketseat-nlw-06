import { getCustomRepository } from 'typeorm';

import { TagsRepository } from '@repositories';

import { ITagRequest } from './types';

class CreateTagService {
	async execute({ name }: ITagRequest) {
		const tagsRepository = getCustomRepository(TagsRepository);

		if (!name) throw new Error('Name is required');

		const tagAlreadyExists = await tagsRepository.findOne({ name });

		if (tagAlreadyExists) throw new Error('Tag already exists');

		const tag = tagsRepository.create({ name });

		await tagsRepository.save(tag);

		return tag;
	}
}

export { CreateTagService };
