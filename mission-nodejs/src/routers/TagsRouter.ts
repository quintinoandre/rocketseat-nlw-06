import { Router } from 'express';

import { CreateTagController } from '@controllers';

const TagsRouter = Router();

TagsRouter.post('/', new CreateTagController().handle);

export { TagsRouter };
