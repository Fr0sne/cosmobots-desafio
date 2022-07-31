import { Prisma } from "@prisma/client";
import { PrismaService } from "../../connections/prisma/conn";
import { AppError } from "../../error/AppError";
import { UserCreateInput, UserUpdateInput } from "../../interfaces/IUser";

export class UserRepository {
  constructor(private prisma: PrismaService) {}
  async create({ email, firstName, groupId, lastName }: UserCreateInput) {
    if (!email || !firstName || !groupId || !lastName)
      throw new AppError(
        "Email, First Name, Group and Last Name is required.",
        400
      );
    const createUserResult = await this.prisma.user.create({
      data: {
        email,
        firstName,
        groupId,
        lastName,
      },
    });
    return createUserResult;
  }

  async listById({ id }: { id: string }) {
    if (!id) throw new AppError("Id is required.", 400);
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
    if (!id) throw new AppError("Id is required.", 400);
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
