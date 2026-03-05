const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }

  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      message: "Login successful",
      username: username
    });
  }

  return res.status(401).json({
    message: "Invalid username or password"
  });

});

module.exports = router;