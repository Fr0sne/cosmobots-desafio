import { UserUpdateInput } from "../../../interfaces/IUser";
import { UserRepository } from "../repository/UserRepository";

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(data: UserUpdateInput) {
    try {
      const result = await this.userRepository.update(data);
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
