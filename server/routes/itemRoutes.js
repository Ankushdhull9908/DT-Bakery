import { Router } from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", getAllItems);                              // public
router.get("/:id", getItemById);                          // public
router.post("/", protect, adminOnly, createItem);         // admin only
router.put("/:id", protect, adminOnly, updateItem);       // admin only
router.delete("/:id", protect, adminOnly, deleteItem);    // admin only

export default router;
