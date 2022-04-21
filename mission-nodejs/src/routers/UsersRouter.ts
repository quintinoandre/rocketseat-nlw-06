import { Router } from 'express';

import { CreateUserController } from '@controllers';

const UsersRouter = Router();

UsersRouter.post('/', new CreateUserController().handle);

export { UsersRouter };
