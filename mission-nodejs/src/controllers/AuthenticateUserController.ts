import { AuthenticateUserService } from "@services";
import { Request, Response } from "express";

class AuthenticateUserController {
  async handle({ body: { email, password } }: Request, response: Response) {
    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });

    return response.json({ token });
  }
}

export { AuthenticateUserController };
