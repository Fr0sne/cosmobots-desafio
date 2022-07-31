import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.createUserUseCase.execute(request.body);
    return response
      .status(result.statusCode || 201)
      .send(result.data || { message: result.message });
  }
}
