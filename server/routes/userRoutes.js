const express = require("express");
const router = express.Router();
const {
  logInController,
  registerController,
  fetchAllUsers,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/logIn", logInController);
router.post("/register", registerController);
router.get("/fetchAllUser", authMiddleware, fetchAllUsers);

module.exports = router;
