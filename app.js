require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');

const rootRouter = require('./routes');
const { sequelize } = require('./models');

const app = express();
sequelize.sync();

app.set('port', process.env.PORT || 8001);

// TODO: Apply Middleware
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);

// TODO: Prevent CORS Error
app.use((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'x-total-count');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');
  next();
});

// TODO: Route '/api'
app.use('/api', rootRouter);

// TODO: Catch 404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found...');
  err.status = 403;
  next(err);
});

// TODO: Handle Error
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    data: err.data
  });
});

// TODO: Running Server
app.listen(app.get('port'), () => {
  process.env.NODE_ENV === 'development'
    ? console.log(
        `Development Server is running on "http://localhost:${app.get('port')}"`
      )
    : console.log(`Production Server is running on port ${app.get('port')}`);
});
