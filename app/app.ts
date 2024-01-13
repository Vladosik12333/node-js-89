import express, { Express, Request, Response } from "express";
import logger from "morgan";
import cors from "cors";

const userRouter = require("./routes/users");

const app: Express = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.use((req: Request, res: Response) => {
  res.status(204).json({ message: "No Found" });
});

// TODO: Add custom error handler

module.exports = app;
