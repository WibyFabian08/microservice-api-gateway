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
const refreshTokenRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const imageRouter = require('./routes/imageCourse');
const myCourseRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/review');
const ordersPaymentRouter = require('./routes/ordersPayment');
const webhooksRouter = require('./routes/webhook');

// middleware
const verifyToken = require('./middleware/verifyToken');
const can = require('./middleware/permission');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/refresh_token', refreshTokenRouter);

app.use('/media', verifyToken, can('admin', 'student'), mediaRouter);
app.use('/mentors', verifyToken, can('admin'), mentorsRouter);
app.use('/chapters', verifyToken, can('admin'), chaptersRouter);
app.use('/lessons', verifyToken, can('admin'), lessonsRouter);
app.use('/image-course', verifyToken, can('admin'), imageRouter);
app.use('/my-courses', verifyToken, can('admin', 'student'), myCourseRouter);
app.use('/reviews', verifyToken, can('admin', 'student'), reviewsRouter);
app.use('/orders-payment', verifyToken, can('admin', 'student'), ordersPaymentRouter);
app.use('/webhooks', webhooksRouter);

module.exports = app;
