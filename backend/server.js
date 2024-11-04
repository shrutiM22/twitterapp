import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middlelayers
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)
app.use(express.json()); // to parse req.body

app.use(cookieParser()); // parse the request to get the cookies

// auth route middlelayer
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectMongoDB();
});
