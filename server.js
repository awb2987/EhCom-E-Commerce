require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Routes
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Sync sequelize models to the database, then turn on the server
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// Graceful shutdown for SIGINT and SIGTERM
const shutdown = () => {
  server.close(() => {
    console.log('Server closed');
    sequelize.close();
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
