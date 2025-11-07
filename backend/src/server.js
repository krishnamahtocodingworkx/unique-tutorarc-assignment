import express from "express";
import cors from "cors";
import dbConnect from "./utils/db.js";
import dotenv from "dotenv";
import router from "./routes/session.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
dbConnect();
const PORT = process.env.PORT || 7777;

app.use(router);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
