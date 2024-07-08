import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import userProfileRouter from './routes/userprofile.js';
import projectsRouter from './routes/projects.js';
import db from './db/init.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3001;

const server = express();

// View engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Setup use pages for the backend postgres queries
server.use('/', indexRouter);
server.use('/', usersRouter);
server.use('/', userProfileRouter);
server.use('/', projectsRouter);

// Catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
server.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Test API endpoint
server.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server' });
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
