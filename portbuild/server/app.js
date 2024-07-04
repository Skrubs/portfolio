import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config();

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import userProfileRouter from './routes/userprofile.js'
import projectsRouter from './routes/projects.js'

const server = express()

import db from './db/init.js'

// view engine setup
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'jade')

server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cookieParser())
server.use(express.static(path.join(__dirname, 'public')))

server.use(bodyParser.json())
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// setup use pages for the backend postgres queries
server.use('/', indexRouter)
server.use('/', usersRouter)
server.use('/', userProfileRouter)
server.use('/', projectsRouter)

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404))
})

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

async function start() {
  await db()
  console.log("Starting server...")
}

start()

export default server