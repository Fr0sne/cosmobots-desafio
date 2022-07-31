import { Prisma } from "@prisma/client";
import { UserCreateInput } from "../../../interfaces/IUser";
import { UserRepository } from "../repository/UserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(data: UserCreateInput) {
    try {
      const result = await this.userRepository.create(data);
      return {
        data: result,
      };
    } catch (error: any) {
      let statusCode;
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case "P2003":
            error.message = "No group found with this id.";
            statusCode = 400;
          default:
            break;
        }
      }
      return {
        message: error.message,
        statusCode: statusCode || 500,
      };
    }
  }
}
