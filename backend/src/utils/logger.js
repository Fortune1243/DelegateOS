const levels = ['debug', 'info', 'warn', 'error'];

// Lightweight logger wrapper; swap with Winston/Pino once observability requirements are defined
const logger = levels.reduce((acc, level) => {
  acc[level] = (...args) => {
    const timestamp = new Date().toISOString();
    console[level === 'debug' ? 'log' : level](`[${timestamp}] [${level.toUpperCase()}]`, ...args);
  };
  return acc;
}, {});

module.exports = logger;

