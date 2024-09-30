require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Graceful shutdown
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    sequelize.close();
    process.exit(0);
  });
});
