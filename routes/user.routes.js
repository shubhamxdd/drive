const express = require("express");
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.js");

const bcrypt = require("bcrypt");

const router = express.Router();

// register
router.get("/register", async (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 3 }),
  body("username").trim().isLength({ min: 3 }),
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    // console.log(errors);

    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: "Invalid Data.",
      });
    }

    const { email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email,
      username,
      password: hashedPassword,
    });

    res.json(user);
  }
);

// TODO: login

module.exports = router;
