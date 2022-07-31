import express from "express";
import { router } from "./routes/Routes";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(
  cors({
    origin: "https://desafio.cosmobots-frontend.io/",
  })
);
app.use(express.json());
app.use(router);
if (process.env.TEST == "false") {
  app.listen(3000, () => console.log("Listening on port 3000"));
}

export { app };
