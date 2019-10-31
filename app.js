require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
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
app.use(cors());

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
