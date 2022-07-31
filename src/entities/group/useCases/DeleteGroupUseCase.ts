import { GroupDeleteInput } from "../../../interfaces/IGroup";
import { GroupRepository } from "../repository/GroupRepository";

export class DeleteGroupUseCase {
  constructor(private groupRepository: GroupRepository) {}
  async execute(data: GroupDeleteInput) {
    try {
      const result = await this.groupRepository.delete(data);
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
