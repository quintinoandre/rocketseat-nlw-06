import { Router } from 'express';

import { CreateTagController, ListTagsController } from '@controllers';
import { authorizationMiddleware } from '@middlewares';

const TagsRouter = Router();

TagsRouter.post('/', authorizationMiddleware, new CreateTagController().handle);
TagsRouter.get('/', new ListTagsController().handle);

export { TagsRouter };
