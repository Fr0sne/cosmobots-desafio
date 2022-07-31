import { User } from "@prisma/client";
import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.createUserUseCase.execute(request.body);
    return response
      .status(result.statusCode || 200)
      .send(result.data || { message: result.message });
  }
}
