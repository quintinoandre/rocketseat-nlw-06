import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from '@entities';

@EntityRepository(UserEntity)
class UsersRepository extends Repository<UserEntity> {}

export { UsersRepository };
