import mongoose from "mongoose";

const liveSessionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  unique_id: { type: String, required: true },
  userurl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("live_sessions", liveSessionSchema);
