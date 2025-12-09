// Simple gatekeeper; replace with real JWT/session validation and RBAC enforcement
module.exports = function authGuard(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized: attach req.user via real auth middleware.' });
  }
  next();
};

