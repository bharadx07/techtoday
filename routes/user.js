//Packages
const express = require("express");
const router = express.Router();
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

//Utils
const generateTemplate = require("../utils/ForgotPasswordTemplate");

//DB Schemas
const User = require("../models/User");

//Validation
const RegisterValidation = require("../validation/RegisterValidation");
const LoginValidation = require("../validation/LoginValidation");
const ForgotPasswordValidation = require("../validation/ForgotPasswordValidation");
const ValidateToken = require("../validation/ValidateToken");

router.post("/login", async (req, res) => {
  if (!req.body) {
    res.status(400).send("Bad Input");
  }

  //Validation
  const { error } = LoginValidation(req.body);

  if (error) {
    return res.status(400).send(error.details);
  }

  //Attempt To Find A User With The Given Data
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send("Email is Invalid");
  }

  //Check password is correct
  const validpass = await bycrypt.compare(req.body.password, user.password);

  if (!validpass) {
    return res.status(400).send("Password is Invalid");
  }

  //Create and assign a token
  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });
  res.status(200).header("auth-token", token).send(token);
});

router.post("/register", async (req, res) => {
  if (!req.body) {
    res.status(400).send("Bad Input");
  }
  //Validation
  const { error } = RegisterValidation(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).send(error.details);
  }
  //Check if user allready exists
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) {
    return res.status(400).send("Email Allready Exists");
  }

  //Hash the password
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(req.body.password, salt);
  //New user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.status(200).send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/forgot-password", async (req, res) => {
  const { error } = ForgotPasswordValidation(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).send(error.details);
  }

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    //Setting Up Email Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: process.env.RESET_EMAIL,
        pass: process.env.RESET_PASSWORD,
      },
    });

    changePasswordToken = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET, {
      expiresIn: 60 * 30,
    });

    //Message To User
    messageToUser = generateTemplate(changePasswordToken);

    //Message Options
    const messageOptions = {
      subject: "TechToday: Forgot Your Password",
      to: req.body.email,
      from: process.env.RESET_EMAIL,
      html: messageToUser,
    };

    //Sending Email
    try {
      transporter.sendMail(messageOptions);
    } catch (error) {
      console.log(error);
    }
  }

  res.send("If Email Exists, Email Sent");
});

router.put("/change-password", ValidateToken, async (req, res) => {
  if (req.body.password === "") {
    return res.status(400).send("Password is Required");
  } else if (req.body.password.length < 6) {
    return res.status(400).send("Needs to be 6+ Characters Long");
  }
  //Hash the password
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(req.body.password, salt);

  //Find a Valid User
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { password: hashedPassword },
    { useFindAndModify: false }
  );

  const loginUser = {
    email: user.email,
    password: req.body.password,
  };

  return res.status(200).send("Password Changed");
});

router.get("/auth", ValidateToken, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });

  if (user) {
    res.status(200).json(user);
  } else {
    return res.status(400).send("Error Finding User");
  }
});

module.exports = router;
