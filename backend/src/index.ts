import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import path from "path";

// TODO: add try catch for db connection and server listening
// mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "https://bookmystay-vf65.onrender.com/"],
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING as string)
  .then(() => {
    console.log("db connected");
    app.listen(7000, () => {
      console.log("server is running on localhost:7000");
    });
  })
  .catch((error) => {
    console.log("db connection error: ", error);
  });

// app.listen(7000, () => {
//   console.log("server is running on localhost:7000");
// });
