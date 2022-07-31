import { Request, Response } from "express";
import { ListGroupUseCase } from "../useCases/ListGroupUseCase";

export class ListGroupController {
  constructor(private ListGroupUseCase: ListGroupUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.ListGroupUseCase.execute();
    return response
      .status(result.statusCode || 200)
      .send(result.data || { message: result.message });
  }
}
