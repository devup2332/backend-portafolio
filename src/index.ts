import express from "express";
import contactRouter from "./routers/contact";
import { env } from "./env";
import morgan from "morgan";
import cors from "cors";
import { logColor } from "./utils/logColor";

const server = express();
const origins = ["https://www.drojascam.com", "http://localhost:5173"];
server.use(
  cors({
    origin: origins,
  }),
);
server.use(express.json());
server.use(morgan("dev"));

server.use("/api/contact", contactRouter);

server.listen(env.PORT || 8080, () => {
  logColor(`SERVER ON PORT ${env.PORT}`, "green");
});
