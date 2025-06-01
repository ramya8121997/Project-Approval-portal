const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    console.log("allowedRoles.includes(req.user.role)", allowedRoles.includes(req.user.role), req.user.role)
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access forbidden: insufficient rights' });
    }
    next();
  };
};

module.exports = roleMiddleware;
