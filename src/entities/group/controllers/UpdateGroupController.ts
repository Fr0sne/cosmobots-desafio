import { Request, Response } from "express";
import { UpdateGroupUseCase } from "../useCases/UpdateGroupUseCase";

export class UpdateGroupController {
  constructor(private UpdateGroupUseCase: UpdateGroupUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.UpdateGroupUseCase.execute({
      id: request.params.id,
      ...request.body,
    });
    return response
      .status(result.statusCode || 200)
      .send(result.data || { message: result.message });
  }
}
