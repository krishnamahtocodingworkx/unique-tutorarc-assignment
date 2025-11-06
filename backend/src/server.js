// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const { v4: uuidv4 } = require("uuid");
// const dbConnect = require("./utils/db");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // --- Connect MongoDB ---
// dbConnect();

// // --- Define Schema ---
// const liveSessionSchema = new mongoose.Schema({
//   type: String,
//   unique_id: String,
//   userurl: String,
// });

// const LiveSession = mongoose.model("live_sessions", liveSessionSchema);

// // --- Create new session ---
// app.post("/api/start-session", async (req, res) => {
//   const unique_id = uuidv4();
//   const userurl = `http://localhost:5173/session/${unique_id}`;

//   const session = new LiveSession({
//     type: "admin",
//     unique_id,
//     userurl,
//   });

//   await session.save();
//   res.json({ success: true, session });
// });

// // --- Get session by unique_id ---
// app.get("/api/session/:unique_id", async (req, res) => {
//   const session = await LiveSession.findOne({ unique_id: req.params.unique_id });
//   if (!session) return res.status(404).json({ message: "Session not found" });
//   res.json(session);
// });

// app.listen(5000, () => console.log("🚀 Server running on port 5000"));

import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import LiveSession from "./models/session.js";
import dbConnect from "./utils/db.js";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// MongoDB connection
dbConnect();

// Create new session (admin)
app.get("/", (req, res) => {
  return res.json({
    message: "Live Tutoring Session Backend is running.",
  });
});

app.post("/api/start-session", async (req, res) => {
  try {
    console.log("Starting new session... backend");
    const unique_id = uuidv4();
    const userurl = `http://localhost:5173/session/${unique_id}`;

    const newSession = new LiveSession({
      type: "admin",
      unique_id,
      userurl,
    });

    await newSession.save();
    return res.json({ success: true, session: newSession });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// Get session by unique_id
app.get("/api/session/:id", async (req, res) => {
  try {
    const session = await LiveSession.findOne({ unique_id: req.params.id });
    if (!session) return res.status(404).json({ message: "Session not found" });
    res.json({ success: true, session });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8888, () => console.log("🚀 Server running on port 8888"));
