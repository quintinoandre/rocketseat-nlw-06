import { CreateUserService } from "@services";
import { Request, Response } from "express";

class CreateUserController {
  async handle(
    { body: { name, email, admin, password } }: Request,
    response: Response
  ) {
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    return response.json(user);
  }
}

export { CreateUserController };
