import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    if (!name) {
      return res.send({ error: "name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }
    if (!phone) {
      return res.send({ error: "phone number is required" });
    }

    //user check
    const existingUser = await userModel.findOne({ email });
    //existing User
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "User already exists please login",
      });
    }

    //hashing password
    const hashedPassword = await hashPassword(password);

    // save or registering new user
    const user = await new userModel({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
    });
  }
};

// post login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // email password validation
    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, message: "invalid email or password" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }
    //token generate

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfull",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "error in login" });
  }
};

//test Controller

export const testController = (req, res) => {
  res.send("protected route");
};
