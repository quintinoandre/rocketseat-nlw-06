import { Router } from 'express';

import {
	CreateUserController,
	ListUserReceiveComplimentsController,
	ListUsersController,
	ListUserSendComplimentsController,
} from '@controllers';

const UsersRouter = Router();

UsersRouter.post('/', new CreateUserController().handle);
UsersRouter.get(
	'/compliments/send',
	new ListUserSendComplimentsController().handle
);
UsersRouter.get(
	'/compliments/receive',
	new ListUserReceiveComplimentsController().handle
);
UsersRouter.get('/', new ListUsersController().handle);

export { UsersRouter };
