import { GroupCreateInput } from "../../../interfaces/IGroup";
import { GroupRepository } from "../repository/GroupRepository";

export class CreateGroupUseCase {
  constructor(private groupRepository: GroupRepository) {}
  async execute(data: GroupCreateInput) {
    try {
      const result = await this.groupRepository.create(data);
      return {
        data: result,
      };
    } catch (error: any) {
      return {
        message: error.message,
        statusCode: error.statusCode || 500,
      };
    }
  }
}
