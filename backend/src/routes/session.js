import express from "express";
const router = express.Router();
import { SessionController } from "../controller/session.js";

router.get("/", (req, res) => {
  return res.json({
    message: "Unique TutorArc Private Limited Assignment Backend is running.",
  });
});

// Create new session (admin)
router.post("/api/start-session", SessionController.createSession);

// Get session by unique_id
router.get("/api/session/:id", SessionController.studentSession);

export default router;
