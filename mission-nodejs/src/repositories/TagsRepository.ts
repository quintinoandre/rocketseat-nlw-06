import { TagEntity } from "@entities";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(TagEntity)
class TagsRepository extends Repository<TagEntity> {}

export { TagsRepository };
