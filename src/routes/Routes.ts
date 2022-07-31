import { Router } from "express";
import { Prisma } from "../connections";
import { CreateUserController } from "../user/controllers/CreateUserController";
import { UserRepository } from "../user/repository/UserRepository";
import { CreateUserUseCase } from "../user/useCases/CreateUserUseCase";
import { userRoutes } from "./user/UserRoutes";

const router = Router();

router.use("/user", userRoutes);

export { router };
