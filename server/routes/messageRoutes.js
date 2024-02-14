const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageController");

router.get("/:chatId", authMiddleware, allMessages);
router.post("/", authMiddleware, sendMessage);

module.exports = router;
