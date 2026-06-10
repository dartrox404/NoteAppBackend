const jwt = require("jsonwebtoken");
const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No Token Provided",
      });
    }
    const token = authHeader.splice(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    res.user=decode;
    next();
  } catch (e) {
    res.status(401).json({
      message: e,
    });
  }
};

module.exports = protect;
