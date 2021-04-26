require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// daftar router yang telah dibuat
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mediaRouter = require('./routes/media');
const coursesRouter = require('./routes/courses');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const refreshTokenRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const imageRouter = require('./routes/imageCourse');
const myCourseRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/review');

// middleware
const verifyToken = require('./middleware/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/media', mediaRouter);
app.use('/courses', coursesRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/refresh_token', refreshTokenRouter);
app.use('/mentors', mentorsRouter);
app.use('/chapters', chaptersRouter);
app.use('/lessons', lessonsRouter);
app.use('/image-course', imageRouter);
app.use('/my-courses', myCourseRouter);
app.use('/reviews', reviewsRouter);

module.exports = app;
