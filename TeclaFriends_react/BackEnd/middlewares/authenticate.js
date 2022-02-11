const jwt = require("jsonwebtoken");

const userVerify = async (token) => {
  return await jwt.verify(`${token}`, "sePasaEnEts");
};

module.exports.authenticate = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization;
      let verified = await userVerify(token);
      if (verified) {
        return next();
      }
    } else {
      res.status(401).json({ error: "No token" });
    }
  } catch (err) {
    res.status(401).json({ error: err });
  }
};