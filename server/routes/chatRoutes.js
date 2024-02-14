const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { accessChat, fetchChats } = require("../controllers/chatController");

router.post("/", authMiddleware, accessChat);
router.get("/", authMiddleware, fetchChats);

module.exports = router;
