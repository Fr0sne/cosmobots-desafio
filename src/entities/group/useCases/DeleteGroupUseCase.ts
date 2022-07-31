import { Prisma } from "@prisma/client";
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
      let statusCode;
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2025") {
          error.message = "No group found with this id.";
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
