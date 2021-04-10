import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const loginRequired = expressAsyncHandler(async (req, res, next) => {
  let token = req.headers.authorization ? req.headers.authorization : "";
  if (token.startsWith("Bearer")) {
    try {
      token = token.split(" ")[1];
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(verifiedToken.id).select("-password");
      next();
    } catch (error) {
      console.error(error);

      res.status(401);
      throw new Error("Invalid Token!");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, No Token!");
  }
});
