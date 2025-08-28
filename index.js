import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/Auth", authRoutes);

app.listen(3001, () => {
  console.log("🚀 Server listening on port 3001");
});