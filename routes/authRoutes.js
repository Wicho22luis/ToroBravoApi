import { Router } from "express";
import { login } from "../controllers/authController.js";

const router = Router();

router.post("/ObtenerAcceso", login);

export default router;
