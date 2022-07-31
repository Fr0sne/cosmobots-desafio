import express from "express";
import { router } from "./routes/Routes";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "https://desafio.cosmobots.io/",
  })
);
app.use(express.json());
app.use(router);
app.listen(3000);
