import { EntityRepository, Repository } from 'typeorm';

import { TagEntity } from '@entities';

@EntityRepository(TagEntity)
class TagsRepository extends Repository<TagEntity> {}

export { TagsRepository };
