const jwt = require('jsonwebtoken');

async function authMiddleware(req, res, next) {
  try {
    const authorization = req.header('authorization');

    if (authorization) {
      const token = authorization.split('Bearer ')[1];

      const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);

      req.headers['email'] = decoded.email;
      req.headers['id'] = decoded.id;

      next();
    } else {
      res.status(403).json({ message: 'missing authorization header' });
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      res.status(403).json({ message: error.name === 'JsonWebTokenError' ? 'invalid token' : 'expired token' });
    } else {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = { authMiddleware };
