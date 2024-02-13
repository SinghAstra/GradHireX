const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decodedData.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not Authorized, token failed" });
    }
  }
  if (!token) {
    res.status(401).json({ message: "Not Authorized, No token" });
  }
};

module.exports = authMiddleware;
