import { ContactController } from "../controllers/ContactController";
import { Router } from "express";

const controller = new ContactController();
const router = Router();

router.post("/send-email", controller.sendEmail);

export default router;
