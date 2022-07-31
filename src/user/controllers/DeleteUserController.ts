import { User } from "@prisma/client";
import { Request, Response } from "express";
import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";

export class DeleteUserController {
  constructor(private DeleteUserUseCase: DeleteUserUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.DeleteUserUseCase.execute({
      id: request.params.id,
    });
    return response
      .status(result.statusCode || 200)
      .send(result.data || { message: result.message });
  }
}
