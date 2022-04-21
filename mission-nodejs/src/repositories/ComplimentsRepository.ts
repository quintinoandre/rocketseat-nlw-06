import { ComplimentEntity } from "@entities";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ComplimentEntity)
class ComplimentsRepository extends Repository<ComplimentEntity> {}

export { ComplimentsRepository };
