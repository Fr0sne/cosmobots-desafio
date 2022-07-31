import { Request, Response, Router } from "express";
import {
  CreateUserHandle,
  DeleteUserHandle,
  ListUserHandle,
  UpdateUserHandle,
} from "../../user";

const userRoutes = Router();

userRoutes.post("/", (request: Request, response: Response) => {
  return CreateUserHandle.handle(request, response);
});

userRoutes.put("/:id", (request: Request, response: Response) => {
  return UpdateUserHandle.handle(request, response);
});

userRoutes.delete("/:id", (request: Request, response: Response) => {
  return DeleteUserHandle.handle(request, response);
});

userRoutes.get("/", (request: Request, response: Response) => {
  return ListUserHandle.handle(request, response);
});

export { userRoutes };
