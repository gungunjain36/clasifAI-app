import { searchaitools } from "../controllers/aitools.controller.js";
import { Router } from "express";
const router = Router();

router.route("/").get(searchaitools)

// router.route("/").search

export default router;