import { Prisma } from "../../connections";
import { CreateGroupController } from "./controllers/CreateGroupController";
import { DeleteGroupController } from "./controllers/DeleteGroupController";
import { ListGroupController } from "./controllers/ListGroupController";
import { UpdateGroupController } from "./controllers/UpdateGroupController";
import { GroupRepository } from "./repository/GroupRepository";
import { CreateGroupUseCase } from "./useCases/CreateGroupUseCase";
import { DeleteGroupUseCase } from "./useCases/DeleteGroupUseCase";
import { ListGroupUseCase } from "./useCases/ListGroupUseCase";
import { UpdateGroupUseCase } from "./useCases/UpdateGroupUseCase";

const Repository = new GroupRepository(Prisma);
//Create
const CreateGroupService = new CreateGroupUseCase(Repository);
const CreateGroupHandle = new CreateGroupController(CreateGroupService);

//Update
const UpdateGroupService = new UpdateGroupUseCase(Repository);
const UpdateGroupHandle = new UpdateGroupController(UpdateGroupService);

//Delete
const DeleteGroupService = new DeleteGroupUseCase(Repository);
const DeleteGroupHandle = new DeleteGroupController(DeleteGroupService);

//List
const ListGroupService = new ListGroupUseCase(Repository);
const ListGroupHandle = new ListGroupController(ListGroupService);
export {
  CreateGroupHandle,
  UpdateGroupHandle,
  DeleteGroupHandle,
  ListGroupHandle,
};
