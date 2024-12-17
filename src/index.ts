import express from "express";
import contactRouter from "./routes/contact";
import { env } from "./env";
import morgan from "morgan";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/api/contact", contactRouter);

server.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
