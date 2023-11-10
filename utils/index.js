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

module.exports = { validateCredentials };
