import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "./database";
import { UsersRouter } from "@routers";

const app = express();

app.use(express.json());

const {
  env: { PORT },
} = process;

app.use("/users", UsersRouter);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
