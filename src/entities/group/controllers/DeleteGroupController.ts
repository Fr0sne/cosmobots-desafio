import { Request, Response } from "express";
import { DeleteGroupUseCase } from "../useCases/DeleteGroupUseCase";

export class DeleteGroupController {
  constructor(private DeleteGroupUseCase: DeleteGroupUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.DeleteGroupUseCase.execute({
      id: request.params.id,
    });
    return response
      .status(result.statusCode || 200)
      .send(result.data || { message: result.message });
  }
}
