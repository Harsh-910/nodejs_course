const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.get("Authorization")) {
    const token = req.get("Authorization").split(" ")[1];
    let decodeToken;
    try {
      decodeToken = jwt.verify(token, "super");
    } catch (err) {
      console.log(err);
      return res.status(401).json({ message: "token expired" });
    }

    if (!decodeToken) {
      return res.status(401).json({ message: "not authenticated" });
    }

    req.userId = decodeToken.id;
    next();
  } else {
    return res.status(401).json({ message: "token not available in header" });
  }
};
