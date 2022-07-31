import express, { Request, Response } from "express";
import { Prisma } from "./connections";
import { PrismaService } from "./connections/prisma/conn";
import { router } from "./routes/Routes";
import { CreateUserController } from "./user/controllers/CreateUserController";
import { UserRepository } from "./user/repository/UserRepository";
import { CreateUserUseCase } from "./user/useCases/CreateUserUseCase";

const app = express();
app.use(express.json());
app.use(router);
app.listen(3000);
