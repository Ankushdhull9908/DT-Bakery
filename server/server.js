import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();

// --- Middleware ---
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// --- DB ---
mongoDB();

// --- Routes ---
app.use("/api/user", userRoutes);
app.use("/api/items", itemRoutes);

// --- Health check ---
app.get("/", (req, res) => {
  res.json({ success: true, message: "DT Bakery server running" });
});

// --- 404 handler ---
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// --- Global error handler ---
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(5500, () => {
  console.log("Server running on http://localhost:5500");
});