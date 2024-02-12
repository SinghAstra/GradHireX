const express = require("express");
const router = express.Router();
const {
  logInController,
  registerController,
} = require("../controllers/userController");

router.post("/logIn", logInController);
router.post("/register", registerController);

module.exports = router;
