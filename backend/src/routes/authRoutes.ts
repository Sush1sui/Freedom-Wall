import { Router } from "express";
import { handleLogin, handleRegister } from "../controllers/authControllers";
import { isMember } from "../middleware/authMiddleware";
const router = Router();

router.post("/register", isMember, handleRegister);
router.post("/login", handleLogin);

export default router;
