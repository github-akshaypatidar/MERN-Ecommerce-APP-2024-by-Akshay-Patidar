import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes Token based
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    console.log(decode);
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unautherized access Admin not found",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(501).send({
      success: false,
      error,
      message: "error in admin middleware",
    });
  }
};
