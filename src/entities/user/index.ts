import { Prisma } from "../../connections";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ListUserController } from "./controllers/ListUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UserRepository } from "./repository/UserRepository";
import { CreateUserUseCase } from "./useCases/CreateUserUseCase";
import { DeleteUserUseCase } from "./useCases/DeleteUserUseCase";
import { ListUserUseCase } from "./useCases/ListUserUseCase";
import { UpdateUserUseCase } from "./useCases/UpdateUserUseCase";

const Repository = new UserRepository(Prisma);
//Create
const CreateUserService = new CreateUserUseCase(Repository);
const CreateUserHandle = new CreateUserController(CreateUserService);

//Update
const UpdateUserService = new UpdateUserUseCase(Repository);
const UpdateUserHandle = new UpdateUserController(UpdateUserService);

//Delete
const DeleteUserService = new DeleteUserUseCase(Repository);
const DeleteUserHandle = new DeleteUserController(DeleteUserService);

//List
const ListUserService = new ListUserUseCase(Repository);
const ListUserHandle = new ListUserController(ListUserService);
export { CreateUserHandle, UpdateUserHandle, DeleteUserHandle, ListUserHandle };
