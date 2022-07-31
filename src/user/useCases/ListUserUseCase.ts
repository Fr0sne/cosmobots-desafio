import { UserRepository } from "../repository/UserRepository";

export class ListUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute() {
    try {
      const result = await this.userRepository.listAll();
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
