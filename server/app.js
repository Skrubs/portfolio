import express from "express";
import path from "path";
import bodyParser from "body-parser";
import createError from "http-errors";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import userProfileRouter from "./routes/userprofile.js";
import projectsRouter from "./routes/projects.js";
import db from "./db/init.js";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const server = express();
const port = process.env.SERVER_PORT || 5000;

// Set up static file serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(express.static(path.join(__dirname, "public")));
server.use(cors());

// Middleware setup
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Use routers
server.use("/", indexRouter);
server.use("/users", usersRouter);
server.use("/userprofile", userProfileRouter);
server.use("/projects", projectsRouter);

// Catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

// Error handler
server.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Send JSON error response
  res.status(err.status || 500);
  res.json({ error: res.locals.message || "An error occured"});
});

// Start the server
async function start() {
  try {
    await db();
    console.log("Database connected");
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
}

start();

export default server;
