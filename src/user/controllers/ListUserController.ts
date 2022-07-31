import { User } from "@prisma/client";
import { Request, Response } from "express";
import { ListUserUseCase } from "../useCases/ListUserUseCase";

export class ListUserController {
  constructor(private ListUserUseCase: ListUserUseCase) {}
  async handle(request: Request, response: Response) {
    const result = await this.ListUserUseCase.execute();
    return response
      .status(result.statusCode || 200)
      .send(result.data || { message: result.message });
  }
}
