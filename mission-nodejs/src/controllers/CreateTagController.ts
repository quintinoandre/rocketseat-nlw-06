import { CreateTagService } from "@services";
import { Request, Response } from "express";

class CreateTagController {
  async handle({ body: { name } }: Request, response: Response) {
    const createTagService = new CreateTagService();

    const tag = await createTagService.execute({ name });

    return response.json(tag);
  }
}

export { CreateTagController };
