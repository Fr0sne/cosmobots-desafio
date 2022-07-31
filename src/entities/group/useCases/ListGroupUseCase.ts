import { GroupRepository } from "../repository/GroupRepository";

export class ListGroupUseCase {
  constructor(private groupRepository: GroupRepository) {}
  async execute() {
    try {
      const result = await this.groupRepository.listAll();
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
