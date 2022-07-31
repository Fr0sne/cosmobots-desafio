import { Prisma, User } from "@prisma/client";
import { AppError } from "../../error/AppError";
import { UserDeleteInput } from "../../interfaces/IUser";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { UserRepository } from "../repository/UserRepository";

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(data: UserDeleteInput) {
    try {
      const result = await this.userRepository.delete(data);
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
