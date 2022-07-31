import { Prisma, User } from "@prisma/client";
import { AppError } from "../../error/AppError";
import { UserCreateInput } from "../../interfaces/IUser";
import { CreateUserController } from "../controllers/CreateUserController";
import { UserRepository } from "../repository/UserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(data: UserCreateInput) {
    try {
      const result = await this.userRepository.create(data);
      return {
        data: result,
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    }
  }
}
