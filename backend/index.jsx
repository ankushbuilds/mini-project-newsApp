import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // loads .env

const app = express();

// Allow React frontend to connect
app.use(cors());

// Optional root route to avoid 404
app.get("/", (req, res) => {
  res.send("Backend is running. Use /news route to fetch news.");
});

// News API route
app.get("/news", async (req, res) => {
  // Get query parameters from frontend, with defaults
  const category = req.query.category || "general";
  const page = req.query.page || 1;
  const max = req.query.max || 9;

  try {
    // Fetch news from GNews API using env API_KEY
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=${process.env.API_KEY}&page=${page}&max=${max}`
    );

    const data = await response.json();
    res.json(data); // send data to frontend
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Error fetching news" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});