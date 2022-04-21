import { EntityRepository, Repository } from 'typeorm';

import { ComplimentEntity } from '@entities';

@EntityRepository(ComplimentEntity)
class ComplimentsRepository extends Repository<ComplimentEntity> {}

export { ComplimentsRepository };
