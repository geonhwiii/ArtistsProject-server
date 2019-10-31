require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');

const rootRouter = require('./routes');

const app = express();
app.set('port', process.env.PORT || 8001);

// TODO: Apply Middleware
app.use(morgan('dev'));
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

// TODO: Route '/'
app.use('/', rootRouter);

// TODO: Running Server
app.listen(app.get('port'), () => {
  process.env.NODE_ENV === 'development'
    ? console.log(
        `Development Server is running on "http://localhost:${app.get('port')}"`
      )
    : console.log(`Production Server is running on port ${app.get('port')}`);
});
