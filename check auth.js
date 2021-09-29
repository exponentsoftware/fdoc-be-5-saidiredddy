const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  try {
   // const token = authorization.replace("Bearer ", "");
   const token = req.cookies.jwt1;
    const decoded = jwt.verify(token, "jwtSecrete");
    req.user = decoded;
    console.log(token);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};
