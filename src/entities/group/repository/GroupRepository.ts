import { Prisma } from "@prisma/client";
import { PrismaService } from "../../../connections/prisma/conn";

interface GroupUpdateInput extends Prisma.GroupUpdateInput {
  id: string;
}

export class GroupRepository {
  constructor(private prisma: PrismaService) {}
  async create({ description, name }: Prisma.GroupCreateInput) {
    const createGroupResult = await this.prisma.group.create({
      data: {
        description,
        name,
      },
    });
    return createGroupResult;
  }

  async listById({ id }: { id: string }) {
    const listGroupByIdResult = await this.prisma.group.findUnique({
      where: {
        id,
      },
    });
    return listGroupByIdResult;
  }

  async listAll() {
    const listAllGroupsResult = await this.prisma.group.findMany();
    return listAllGroupsResult;
  }

  async update({ id, description, name }: GroupUpdateInput) {
    const updateGroupResult = await this.prisma.group.update({
      where: {
        id,
      },
      data: {
        description,
        name,
      },
    });
    return updateGroupResult;
  }

  async delete({ id }: { id: string }) {
    const deleteGroupResult = await this.prisma.group.delete({
      where: {
        id,
      },
    });
    return deleteGroupResult;
  }
}
