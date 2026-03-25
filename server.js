require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express(); // ✅ CREATE FIRST

// ✅ Connect Database
connectDB();

// ✅ Middlewares
app.use(cors({
  origin: "https://clever-pudding-c06232.netlify.app/auth.html"
}));

app.use(express.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("TrackMySpend API Running");
});

// ✅ Routes
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// ✅ PORT
const PORT = process.env.PORT || 5000;

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
