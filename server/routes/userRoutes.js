const express = require("express");
const router = express.Router();
const {
  logInController,
  registerController,
  fetchAllUsers,
  fetchUserInfo,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/log-in", logInController);
router.post("/sign-up", registerController);
router.get("/fetchAllUser", authMiddleware, fetchAllUsers);
router.get("/fetchUserInfo", authMiddleware, fetchUserInfo);

module.exports = router;
