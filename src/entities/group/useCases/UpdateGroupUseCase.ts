import { GroupUpdateInput } from "../../../interfaces/IGroup";
import { GroupRepository } from "../repository/GroupRepository";

export class UpdateGroupUseCase {
  constructor(private groupRepository: GroupRepository) {}
  async execute(data: GroupUpdateInput) {
    try {
      const result = await this.groupRepository.update(data);
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
