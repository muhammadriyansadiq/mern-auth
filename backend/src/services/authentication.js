const JWT = require("jsonwebtoken");

const secret = "Super@Dooper";

function createtokenforuser(user) {
  const payload = {
    email: user.email,
    password: user.password,
  };

  const token = JWT.sign(payload, secret);

  return token;
}

function validatetoken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  validatetoken,
  createtokenforuser,
};
