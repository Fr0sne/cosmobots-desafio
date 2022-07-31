import { GroupRepository } from "./entities/group/repository/GroupRepository";
import { Prisma } from "./connections";

async function createDefaultGroups() {
  try {
    const groupRepository = new GroupRepository(Prisma);
    await groupRepository.create({
      name: "Support Agents",
      description: "",
    });
    await groupRepository.create({
      name: "Bot Builders",
      description: "",
    });
    await groupRepository.create({
      name: "Bot Admins",
      description: "",
    });
    console.log("Default groups created successfully.");
  } catch (e) {
    console.log(e);
  }
}

createDefaultGroups();
