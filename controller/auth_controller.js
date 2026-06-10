const user = require("../model/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userexisits = await user.findOne({ email });
    if (userexisits) {
      return res.status(400).json({
        message: "User Already Registered",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newuser = await user.create({
      username,
      email,
      password: hashpassword,
    });
    res.status(201).json({
      message: "User registerd successfully",
    });
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userexisits = await user.findOne({ email });
    if (!userexisits) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const ispaswordamatch = await bcrypt.compare(password, userexisits.password);
    if (!ispaswordamatch) {
      return res.status(400).json({
        message: "invalid credentials",
      });
    }
    const token = jwt.sign({ id: userexisits._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({
      token,
      user: {
        id: userexisits._id,
        username: userexisits.username,
        email: userexisits.email,
      },
    });
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
}