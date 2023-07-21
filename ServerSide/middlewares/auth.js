
import jwt from "jsonwebtoken";


const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.get("Authorization")

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  let accessToken= token.split(" ")[1];
  try {
    const decoded = jwt.verify(accessToken, config.TOKEN_SECRET)
    req.user = decoded;
    return next();
    
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};


export default verifyToken