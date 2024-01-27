import express, { Express, NextFunction, Request, Response } from "express";
import logger from "morgan";
import cors from "cors";

import userRouter from "./routes/users";
import HttpError from "./helpers/httpError";

const app: Express = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/products", userRouter);

app.use((_req: Request, res: Response) => {
    res.status(404).json({ message: "Not Found" });
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = "Server Internal Error" } = error;
    res.status(status).json({ message });
})

export default app;
