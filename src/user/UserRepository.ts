import { Prisma } from "@prisma/client";
import { PrismaService } from "../connections/prisma/conn";

interface UserUpdateInput extends Prisma.UserUpdateInput {
  groupId: string;
  id: string;
}

export class UserRepository {
  constructor(private prisma: PrismaService) {}
  async create({ email, firstName, group, lastName }: Prisma.UserCreateInput) {
    const createUserResult = await this.prisma.user.create({
      data: {
        email,
        firstName,
        group,
        lastName,
      },
    });
    return createUserResult;
  }

  async listById({ id }: { id: string }) {
    const listUserByIdResult = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return listUserByIdResult;
  }

  async listAll() {
    const listAllUsersResult = await this.prisma.user.findMany();
    return listAllUsersResult;
  }

  async update({ id, email, firstName, groupId, lastName }: UserUpdateInput) {
    const updateUserResult = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: email ?? undefined,
        firstName: firstName ?? undefined,
        groupId: groupId ?? undefined,
        lastName: lastName ?? undefined,
      },
    });
    return updateUserResult;
  }

  async delete({ id }: { id: string }) {
    const deleteUserResult = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return deleteUserResult;
  }
}
