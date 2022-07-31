import { Prisma } from "@prisma/client";
import { UserDeleteInput } from "../../../interfaces/IUser";
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
      let statusCode;
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2025") {
          error.message = "No user found with this id.";
          statusCode = 404;
        }
      }
      return {
        message: error.message,
        statusCode: statusCode || 500,
      };
    }
  }
}
