const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// 簡單 health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Demo API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from backend API",
    from: "Express in Docker",
  });
});

app.get("/test", (req, res) => {
  console.log("Host:", req.headers.host);
  console.log("X-Real-IP:", req.headers["x-real-ip"]);
  console.log("X-Forwarded-For:", req.headers["x-forwarded-for"]);
  res.json({ message: "ok" });
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend API listening on http://0.0.0.0:${PORT}`);
});
