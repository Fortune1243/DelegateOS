const authService = require('../services/auth.service');

// Future: validate payloads, handle OAuth flows, multi-factor auth, etc.
async function login(req, res, next) {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function logout(req, res, next) {
  try {
    const result = await authService.logout(req.user);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
  logout,
};

