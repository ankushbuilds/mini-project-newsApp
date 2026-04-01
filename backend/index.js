import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // loads .env

const app = express();

// allow your React app to connect
app.use(cors());

// API route
app.get("/news", async (req, res) => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=${process.env.API_KEY}&page=1&max=9`
    );

    const data = await response.json();
    res.json(data); // send data to frontend
  } catch (error) {
    res.status(500).json({ error: "Error fetching news" });
  }
});

// start server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});