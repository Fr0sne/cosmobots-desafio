import { Router } from "express";
import { Prisma } from "../connections";
import { CreateUserController } from "../entities/user/controllers/CreateUserController";
import { UserRepository } from "../entities/user/repository/UserRepository";
import { CreateUserUseCase } from "../entities/user/useCases/CreateUserUseCase";
import { groupRoutes } from "./group/GroupRoutes";
import { userRoutes } from "./user/UserRoutes";

const router = Router();

router.use("/user", userRoutes);
router.use("/group", groupRoutes);

export { router };
