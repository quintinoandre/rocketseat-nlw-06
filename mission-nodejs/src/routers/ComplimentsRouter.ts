import { Router } from 'express';

import { CreateComplimentController } from '@controllers';

const ComplimentsRouter = Router();

ComplimentsRouter.post('/', new CreateComplimentController().handle);

export { ComplimentsRouter };
