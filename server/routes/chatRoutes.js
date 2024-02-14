const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { accessChat } = require("../controllers/chatController");

router.post("/", authMiddleware, accessChat);

module.exports = router;
