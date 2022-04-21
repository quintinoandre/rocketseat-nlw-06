import { Router } from "express";
import { CreateUserController } from "@controllers";

const UsersRouter = Router();

const createUserController = new CreateUserController();

UsersRouter.post("/", createUserController.handle);

export { UsersRouter };
