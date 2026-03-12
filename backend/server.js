const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/legal_advocate_finder";

app.use(cors({ origin: ["http://localhost:8080"], credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

async function connectMongo() {
  try {
    await mongoose.connect(MONGODB_URI, { autoIndex: true });
    console.log("MongoDB connected");
  } catch (err) {
    console.warn("MongoDB connection failed:", err.message);
  }
}

connectMongo();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", mongo: mongoose.connection.readyState === 1 ? "connected" : "not_connected" });
});

app.use("/api", require("./routes"));

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

