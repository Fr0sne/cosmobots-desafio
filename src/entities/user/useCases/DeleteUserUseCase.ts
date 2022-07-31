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
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    }
  }
}
