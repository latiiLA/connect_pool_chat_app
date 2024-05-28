import express from "express";
import { logout, signup, login } from "../controllers/auth.controllers.js";

const router = express.Router();

// signup router
router.post("/signup", signup);

// login router
router.post("/login", login);

// logout router
router.post("/logout", logout);

export default router;
