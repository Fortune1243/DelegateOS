const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { PORT } = require('./config/env');
const logger = require('./utils/logger');

const app = express();

// Core middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check endpoint
app.get('/ping', (req, res) => {
  res.json({ status: 'ok' });
});

// Automatically load every route module in /src/routes
const routesDir = path.join(__dirname, 'routes');
fs.readdirSync(routesDir).forEach((file) => {
  if (!file.endsWith('.js')) return;

  const modulePath = path.join(routesDir, file);
  const routeModule = require(modulePath);
  const router = routeModule.router || routeModule.default || routeModule;
  const basePath = `/${file.replace(/\.routes\.js$|\.js$/, '')}`;

  if (router && typeof router === 'function' && router.stack) {
    app.use(basePath, router);
    logger.info(`Loaded routes from ${file} at path ${basePath}`);
  } else {
    logger.warn(`Skipping ${file}: expected an Express router export`);
  }
});

// Centralized error handler to catch thrown errors from routes/middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error', err);
  // Future: integrate structured logging, error tracking, and custom error classes
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
  });
});

app.listen(PORT, () => {
  logger.info(`DelegateOS backend listening on port ${PORT}`);
  // Future: initialize database connections, message bus, debate engine hooks, etc.
});

