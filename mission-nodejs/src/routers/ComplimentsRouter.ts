import { CreateComplimentController } from "@controllers";
import { Router } from "express";

const ComplimentsRouter = Router();

ComplimentsRouter.post("/", new CreateComplimentController().handle);

export { ComplimentsRouter };
