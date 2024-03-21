import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log("Error connecting");
  });
const app = express();
//allow json
app.use(express.json());
app.listen(3000, () => {
  console.log("Server listening on port 3000!!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
