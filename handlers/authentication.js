const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const { validateCredentials } = require('../utils');

async function login(req, res) {
  const { email, password } = req.body;

  const issues = validateCredentials(email, password);

  if (issues.length) {
    res.status(400).json({ message: issues });
    return;
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(403).json({ message: 'invalid email or password' });
      return;
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(403).json({ message: 'invalid email or password' });
    }

    const token = await jwt.sign({ email: user.email, id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

    res.status(200).send({ token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function register(req, res) {
  const { email, password } = req.body;

  const issues = validateCredentials(email, password);

  if (issues.length) {
    res.status(400).json({ message: issues });
    return;
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      res.status(409).json({ message: 'email already in use' });
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({ email, password: hash });

    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { login, register };
