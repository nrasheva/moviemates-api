const { User } = require('../models/User');

async function register(req, res) {
  const { email, password } = req.body;

  const issues = validateCredentials(email, password);

  if (issues.length) {
    res.status(400).json({ message: issues });
    return;
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: 'email already in use' });
      return;
    }

    await User.create({ email, password });

    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

// Validates authentication credentials
const validateCredentials = (email, password) => {
  if (email === undefined && password === undefined) {
    return 'email and password not provided';
  } else if (email === undefined) {
    return 'email not provided';
  } else if (password === undefined) {
    return 'password not provided';
  }

  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPassword = password.length >= 8;

  if (!validEmail && !validPassword) {
    return 'invalid email and password length';
  }

  if (!validEmail) {
    return 'invalid email';
  }

  if (!validPassword) {
    return 'insufficient password length';
  }

  return '';
};

module.exports = { register };
