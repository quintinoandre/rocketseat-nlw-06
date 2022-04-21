import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import "./database";
import { UsersRouter, TagsRouter } from "@routers";
import { authorizationMiddleware, errorMiddleware } from "@middlewares";

const app = express();

app.use(express.json());

app.use("/users", UsersRouter);
app.use("/tags", authorizationMiddleware, TagsRouter);

app.use(errorMiddleware);

const {
  env: { PORT },
} = process;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
