import { Router } from "express";
import { handleLogin, handleRegister } from "../controllers/authControllers.js";
import { isMember } from "../middleware/authMiddleware.js";
const router = Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);

export default router;
