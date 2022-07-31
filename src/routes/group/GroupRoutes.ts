import { Request, Response, Router } from "express";
import {
  CreateGroupHandle,
  DeleteGroupHandle,
  ListGroupHandle,
  UpdateGroupHandle,
} from "../../entities/group";

const groupRoutes = Router();

groupRoutes.post("/", (request: Request, response: Response) => {
  return CreateGroupHandle.handle(request, response);
});

groupRoutes.put("/:id", (request: Request, response: Response) => {
  return UpdateGroupHandle.handle(request, response);
});

groupRoutes.delete("/:id", (request: Request, response: Response) => {
  return DeleteGroupHandle.handle(request, response);
});

groupRoutes.get("/", (request: Request, response: Response) => {
  return ListGroupHandle.handle(request, response);
});

export { groupRoutes };
