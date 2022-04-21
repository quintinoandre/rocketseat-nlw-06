import { Router } from "express";
import { AuthenticateUserController } from "@controllers";

const LoginRouter = Router();

LoginRouter.post("/", new AuthenticateUserController().handle);

export { LoginRouter };
