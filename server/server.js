import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
const app = express();

import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";

//file system
import { dirname } from "path";
import { fileURLToPath, URL } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//db
import connectDB from "./db/connect.js";

// Routers
import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";

// custom middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";

//env
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//parse data as json format
app.use(express.json());
app.use(mongoSanitize());
app.use(cookieParser());

//serve static files
app.use(express.static("public"));
app.use("/image/", (req, res) => {
  res.send("sended");
});

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/recipe", recipeRoutes);
// app.use('/static',express.static(path.join(__dirname,'public')))
//

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is Listening on PORT ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
