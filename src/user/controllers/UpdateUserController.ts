import { User } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";

export class UpdateUserController {
  constructor(private UpdateUserUseCase: UpdateUserUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.UpdateUserUseCase.execute({
      id: request.params.id,
      ...request.body,
    });
    return response
      .status(result.statusCode || 200)
      .send(result.data || { message: result.message });
  }
}
