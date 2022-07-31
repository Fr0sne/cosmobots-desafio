import { Request, Response } from "express";
import { CreateGroupUseCase } from "../useCases/CreateGroupUseCase";

export class CreateGroupController {
  constructor(private createGroupUseCase: CreateGroupUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.createGroupUseCase.execute(request.body);
    return response
      .status(result.statusCode || 201)
      .send(result.data || { message: result.message });
  }
}
