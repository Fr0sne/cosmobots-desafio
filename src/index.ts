import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send({
    message: "Teste",
  });
});

app.listen(3000);
