import LiveSession from "../models/session.js";
import { v4 as uuidv4 } from "uuid";

export const SessionController = {
  createSession: async (req, res) => {
    try {
      const unique_id = uuidv4();
      const userurl = `https://unique-tutorarc-assignment.vercel.app/${unique_id}`;

      const newSession = new LiveSession({
        type: "admin",
        unique_id,
        userurl,
      });

      await newSession.save();
      return res.status(200).json({ success: true, session: newSession });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
  studentSession: async (req, res) => {
    try {
      const session = await LiveSession.findOne({ unique_id: req.params.id });
      if (!session)
        return res.status(404).json({ message: "Session not found" });
      return res.status(201).json({ success: true, session });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
