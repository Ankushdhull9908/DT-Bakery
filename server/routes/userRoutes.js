import { Router } from "express";
import {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
} from "../controllers/userController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);                      // logged-in user's own data
router.get("/all", protect, adminOnly, getAllUsers);     // admin only

export default router;
